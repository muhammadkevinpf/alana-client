import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  SET_BAG_PRODUCTS,
  ORDER_PRODUCT,
  SET_ORDERED_PRODUCTS,
  LOADING_USER,
  ORDER_APPOINTMENT,
  SET_APPOINTMENT,
} from "../types";

const initialState = {
  authenticated: false,
  credentials: {},
  loading: false,
  bag: [],
  ordered_products: [],
  appointment: [],
  success: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        loading: false,
        authenticated: true,
        ...action.payload,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_BAG_PRODUCTS:
      return {
        ...state,
        bag: [...state.bag, action.payload],
      };
    case ORDER_PRODUCT:
      return {
        ...state,
        bag: [],
        success: action.payload,
      };
    case SET_ORDERED_PRODUCTS:
      return {
        ...state,
        ordered_products: action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case ORDER_APPOINTMENT:
      return {
        ...state,
        success: action.payload,
      };
    case SET_APPOINTMENT:
      return {
        ...state,
        appointment: action.payload,
      };
    default:
      return state;
  }
}

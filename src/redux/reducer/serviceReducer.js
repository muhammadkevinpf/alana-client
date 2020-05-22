import {
  SET_TREATMENTS,
  SET_SERVICES,
  LOADING_DATA,
  SET_PRODUCTS,
  STOP_LOADING_DATA,
} from "../types";

const initialState = {
  services: [],
  treatments: [],
  products: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_DATA:
      return {
        ...state,
        loading: false,
      };
    case SET_SERVICES:
      return {
        ...state,
        services: action.payload,
        loading: false,
      };
    case SET_TREATMENTS:
      return {
        ...state,
        treatments: action.payload,
        loading: false,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

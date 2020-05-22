import {
  SET_TREATMENTS,
  SET_SERVICES,
  SET_PRODUCTS,
  LOADING_DATA,
  SET_ERRORS,
} from "../types";

import axios from "axios";

// get all services by category
export const getServices = (serviceName, category) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/${serviceName}/category/${category}`)
    .then((res) => {
      dispatch({
        type: SET_SERVICES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_SERVICES,
        payload: [],
      });
    });
};

export const getTreatments = (serviceDetails) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/treatments/${serviceDetails}`)
    .then((res) => {
      dispatch({
        type: SET_TREATMENTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getProducts = (productDetails) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/products/${productDetails}`)
    .then((res) => {
      dispatch({
        type: SET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

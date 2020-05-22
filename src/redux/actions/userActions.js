import {
  SET_UNAUTHENTICATED,
  SET_USER,
  LOADING_UI,
  SET_ERRORS,
  SET_BAG_PRODUCTS,
  ORDER_PRODUCT,
  SET_ORDERED_PRODUCTS,
  LOADING_USER,
  ORDER_APPOINTMENT,
  SET_APPOINTMENT,
  STOP_LOADING_UI,
  LOADING_DATA,
  STOP_LOADING_DATA,
  PAY_PRODUCTS,
} from "../types";

import axios from "axios";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: STOP_LOADING_UI });
      setTimeout(() => {
        history.push("/");
      }, 500);
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const signUpUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/signup", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  window.location.href = "/";
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const orderProducts = (productDetails) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/transaction", productDetails)
    .then((res) => {
      dispatch({ type: ORDER_PRODUCT, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};

export const payProducts = (transactionId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/transaction/pay/${transactionId}`)
    .then((res) => {
      dispatch({ type: PAY_PRODUCTS, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
  const userToken = token;
  localStorage.setItem("userToken", userToken);
  axios.defaults.headers.common["Authorization"] = userToken;
};

export const addToBag = (productDetails) => (dispatch) => {
  dispatch({ type: SET_BAG_PRODUCTS, payload: productDetails });
};

export const getAllOrderedProducts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/transaction`)
    .then((res) => {
      dispatch({
        type: SET_ORDERED_PRODUCTS,
        payload: res.data,
      });
      dispatch({ type: STOP_LOADING_DATA });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getOrderedProductsByUser = (userId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/transaction/${userId}`)
    .then((res) => {
      dispatch({
        type: SET_ORDERED_PRODUCTS,
        payload: res.data,
      });
      dispatch({ type: STOP_LOADING_DATA });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailOrderedProductsByUser = (transactionId) => (dispatch) => {
  axios
    .get(`/transaction/detail/${transactionId}`)
    .then((res) => {
      dispatch({
        type: SET_ORDERED_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const bookAppointment = (appointmentDetails) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/appointment", appointmentDetails)
    .then((res) => {
      dispatch({
        type: ORDER_APPOINTMENT,
        payload: res.data,
      });
      dispatch({
        type: STOP_LOADING_UI,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getBookedAppointment = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/appointment")
    .then((res) => {
      dispatch({
        type: SET_APPOINTMENT,
        payload: res.data,
      });
      dispatch({
        type: STOP_LOADING_DATA,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllBookedAppointment = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/appointments")
    .then((res) => {
      dispatch({
        type: SET_APPOINTMENT,
        payload: res.data,
      });
      dispatch({
        type: STOP_LOADING_DATA,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

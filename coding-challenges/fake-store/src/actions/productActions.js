import axios from "axios";

import {
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from "../constants/productsConstants";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (products) => {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
};

export const fetchError = (err) => {
  return {
    type: FETCH_ERROR,
    payload: err,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data;

        dispatch(fetchSuccess(products));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchError(errMsg));
      });
  };
};

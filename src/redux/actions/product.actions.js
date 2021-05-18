import * as types from "redux/constants/product.constants";
import api from "redux/api";
import { routeActions } from "./route.actions";
import { toast } from "react-toastify";

const productsRequest =
  (pageNum = 1, limit = 6, query = null, sortBy = null) =>
  async (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST, payload: null });
    try {
      let queryString = "";

      if (query) {
        queryString = `&title[$regex]=${query}&title[$options]=i`;
      }

      let sortByString = "";
      if (sortBy?.key) {
        sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
      }

      const res = await api.get(
        `/product?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
      );
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: error });
    }
  };

const getSingleProduct = (productId) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_PRODUCT_REQUEST, payload: null });
  try {
    const res = await api.get(`/product/${productId}`);
    dispatch({
      type: types.GET_SINGLE_PRODUCT_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_SINGLE_PRODUCT_REQUEST_FAILURE,
      payload: error,
    });
  }
};

const createNewProduct = (name, discription, price) => async (dispatch) => {
  dispatch({ type: types.CREATE_PRODUCT_REQUEST, payload: null });
  try {
    const res = await api.post("/product/add", { name, discription, price });

    dispatch({
      type: types.CREATE_PRODUCT_SUCCESS,
      payload: res.data.data,
    });
    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("New product has been created!");
  } catch (error) {
    dispatch({ type: types.CREATE_PRODUCT_FAILURE, payload: error });
  }
};

const updateProduct =
  (productId, name, discription, price) => async (dispatch) => {
    try {
      dispatch({ type: types.UPDATE_PRODUCT_REQUEST, payload: null });
      const res = await api.put(`/product/${productId}/update`, {
        name,
        discription,
        price,
      });
      dispatch({
        type: types.UPDATE_PRODUCT_SUCCESS,
        payload: res.data.data,
      });
      dispatch(routeActions.redirect("__GO_BACK__"));
      toast.success("The product has been updated!");
    } catch (error) {
      dispatch({ type: types.UPDATE_PRODUCT_FAILURE, payload: error });
    }
  };

const deleteProduct =
  (productId, name, discription, price) => async (dispatch) => {
    try {
      dispatch({ type: types.DELETE_PRODUCT_REQUEST, payload: null });
      const res = await api.delete(`/product/${productId}/delete`, {
        productId,
        name,
        discription,
        price,
      });
      dispatch({
        type: types.DELETE_PRODUCT_SUCCESS,
        payload: res.data.data,
      });
      dispatch(routeActions.redirect("__GO_BACK__"));
      toast.success("The product has been updated!");
    } catch (error) {
      dispatch({ type: types.DELETE_PRODUCT_FAILURE, payload: error });
    }
  };
export const productActions = {
  productsRequest,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
};

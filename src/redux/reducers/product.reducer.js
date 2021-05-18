import * as types from "redux/constants/product.constants";
const initialState = {
  products: [],
  totalPageNum: 1,
  selectedProduct: null,
  loading: false,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
    case types.GET_SINGLE_PRODUCT_REQUEST:
    case types.CREATE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_PRODUCT_SUCCESS:
      return { ...state, loading: false };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.products,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_SINGLE_PRODUCT_REQUEST_SUCCESS:
      return {
        ...state,
        selectedProduct: payload,
        loading: false,
        isAuthenticated: true,
      };
    case types.GET_PRODUCTS_FAILURE:
    case types.GET_SINGLE_PRODUCT_REQUEST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default productReducer;

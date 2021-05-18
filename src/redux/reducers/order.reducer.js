import * as types from "redux/constants/product.constants";
const initialState = {
  orders: [],
  totalPageNum: 1,
  selectedOrder: null,
  loading: false,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default orderReducer;

import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";
import orderReducer from "./order.reducer";
import routeReducer from "./route.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  order: orderReducer,
  route: routeReducer,
  user: userReducer,
});

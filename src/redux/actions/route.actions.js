import * as types from "../constants/route.constants";

const redirect = (link) => (dispatch) =>
  dispatch({ type: types.SET_REDIRECT_TO, payload: link });

const removeRedirectTo = () => ({
  type: types.REMOVE_REDIRECT_TO,
  payload: null,
});

export const routeActions = {
  redirect,
  removeRedirectTo,
};

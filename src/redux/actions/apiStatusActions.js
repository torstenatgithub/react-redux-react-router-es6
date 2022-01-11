import * as types from "./actionTypes";

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL };
}

export function apiCallError(error) {
  // debugger;
  return { type: types.API_CALL_ERROR, error };
}

import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return (
    axiosWithAuth()
      // .get("http://localhost:5000/api")
      .post("/login", creds)
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_SUCCESS, payload: res.friends.name });
      })
      .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: "bummer dude" });
      })
  );
};

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions";
import { Z_FILTERED } from "zlib";

const initialState = {
  error: "",
  fetchingData: false,
  loggingIn: false,
  friends: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case FETCH_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        friends: action.payload
      };
  }
};

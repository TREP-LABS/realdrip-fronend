import * as actionTypes from "../../../actions/actionTypes";

const initialState = {
  userData: null,
  addingUserStarted: false,
  addingUserSignin: false,
  addingUserError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDING_USER_STARTED: {
      return {
        ...state,
        userData: null,
        addingUserStarted: true,
        addingUserSignin: false,
        addingUserError: null
      };
    }
    case actionTypes.ADDING_USER_SIGNIN: {
      const { data } = action.payload;
      return {
        ...state,
        userData: data,
        addingUserStarted: false,
        addingUserSignin: true,
        addingUserError: null
      };
    }
    case actionTypes.ADDING_USER_REJECTED: {
      const { message, errors } = action.payload;
      return {
        ...state,
        userData: null,
        addingUserStarted: false,
        addingUserSignin: false,
        addingUserError: {
          message,
          fieldErrors: errors
        }
      };
    }
    default: {
      return state;
    }
  }
};

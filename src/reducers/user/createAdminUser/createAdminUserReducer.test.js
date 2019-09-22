import reducer from '.';
import * as actionTypes from '../../../actions/actionTypes';

const initialState = {
  userData: null,
  addingUserStarted: false,
  addingUserResolved: false,
  addingUserError: null,
};

const alterInitialState = newState => ({ ...initialState, ...newState });

describe('Create admin user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should update the state when adding user starts', () => {
    expect(reducer(undefined, {
      type: actionTypes.ADDING_USER_STARTED,
    })).toEqual(alterInitialState({ addingUserStarted: true }));
  });

  it('should update the state when adding user resolves', () => {
    const sampleUserData = { email: 'tester@gmail.com' }; // A real user has more data
    expect(reducer(undefined, {
      type: actionTypes.ADDING_USER_RESOLVED,
      payload: { data: sampleUserData }
    })).toEqual(alterInitialState({
      addingUserResolved: true, userData: sampleUserData
    }));
  });

  it('should update the state when adding user returns error', () => {
    const sampleError = { errors: { email: "Medical center email is required" }, message: 'Invalid request body' }
    expect(reducer(undefined, {
      type: actionTypes.ADDING_USER_REJECTED,
      payload: sampleError,
    })).toEqual(alterInitialState({ addingUserError: { message: sampleError.message, fieldErrors: sampleError.errors } }));
  });
});

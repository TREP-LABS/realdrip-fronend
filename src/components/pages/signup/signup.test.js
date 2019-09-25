import React from 'react';
import { Signup } from '.';
import SignupView from './view';

const mockEvent = target => ({
  preventDefault: jest.fn(), target,
});

const sampleUserData = {
  name: 'tester',
  email: 'tester@gmail.com',
  country: 'testCountry',
  state: 'testState',
  address: 'testAddress',
  password: 'Password123',
  confirmPassword: 'Password123',
  agreement: true,
};

describe('<Signup />', () => {
  const props = {
    dispatch: jest.fn(),
    addingUserStarted: false,
    addingUserResolved: false,
    addingUserError: null,
  };
  const alterProps = newProps => ({ ...props, ...newProps });
  describe('Rendering:', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Signup {...props} />);
    });
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should redirect to "confirm you email page" if addingUserResolved is true', () => {
      wrapper.setProps(alterProps({ addingUserResolved: true }));
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Behaviour:', () => {
    let wrapper; let wrapperInstance;
    beforeEach(() => {
      props.dispatch.mockReset();
      wrapper = shallow(<Signup {...props} />);
      wrapperInstance = wrapper.instance();
    });
    // The names on the following test block refers
    // to the instance method that handles the behaviour tested.
    describe('GET_INPUT', () => {
      it('should update the state with user input', () => {
        const userInput = 'tester';
        wrapperInstance.getInput(mockEvent({ name: 'name', value: userInput }));
        expect(wrapper.state('name')).toEqual(userInput);
      });
    });
    describe('CLEAR_INPUT_ERRORS', () => {
      it('should clear input errors in the state', () => {
        wrapper.setState({ inputErrors: { name: 'Name is a required field' } });
        wrapperInstance.clearInputErrors();
        expect(wrapper.state('inputErrors').name).toBeUndefined();
      });
    });
    describe('REGISTER', () => {
      it('should set inputErrors if validation fails', () => {
        const wrongEmail = 'testergmail.com';
        wrapper.setState({ email: wrongEmail });
        wrapperInstance.register(mockEvent());
        expect(typeof wrapper.state('inputErrors').email).toEqual('string');
      });
      it('should clear inputErrors and dispatch an actions if validation pass', () => {
        wrapper.setState({
          ...sampleUserData, inputErrors: { email: 'Email is required' }
        });
        wrapperInstance.register(mockEvent());
        expect(wrapper.state('inputErrors').email).toBeUndefined();
        expect(props.dispatch).toHaveBeenCalledTimes(1);
      });
    });

    describe('COMOPONENT_DID_UPDATE', () => {
      it('should update the state if addingUserError prop value changes', () => {
        const submissionError = 'This user already exist'
        expect(wrapper.state('submissionError')).toEqual(null);
        wrapper.setProps({ addingUserError: { message: submissionError } });
        expect(wrapper.state('submissionError')).toEqual(submissionError);
      });
    });
  });
});

describe('<SignupView />', () => {
  const props = {
    addingUserError: null,
    addingUserStarted: false,
    getInput: jest.fn(),
    inputErrors: {},
    location: {
      country: null,
      state: null,
    },
    register: jest.fn(),
    submissionError: null,
  };
  describe('Rendering', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SignupView {...props} />);
    });
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

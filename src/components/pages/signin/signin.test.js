import React from "react";
import { Signin } from ".";
import SigninView from "./view";

const mockEvent = target => ({
  preventDefault: jest.fn(),
  target
});

const sampleUserData = {
  email: "tester@gmail.com",
  password: "Password123"
};

describe("<Signin />", () => {
  const props = {
    dispatch: jest.fn(),
    addingUserStarted: false,
    addingUserSignin: false,
    addingUserError: null
  };
  const alterProps = newProps => ({ ...props, ...newProps });
  describe("Rendering:", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Signin {...props} />);
    });
    it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should redirect to "user has successfully signedin" if addingUserSignin is true', () => {
      wrapper.setProps(alterProps({ addingUserSignin: true }));
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Behaviour:", () => {
    let wrapper;
    let wrapperInstance;
    beforeEach(() => {
      props.dispatch.mockReset();
      wrapper = shallow(<Signin {...props} />);
      wrapperInstance = wrapper.instance();
    });
    // The names on the following test block refers
    // to the instance method that handles the behaviour tested.
    describe("GET_INPUT", () => {
      it("should update the state with user input", () => {
        const userInput = "tester@gmail.com";
        wrapperInstance.getInput(
          mockEvent({ email: "email", value: userInput })
        );
        expect(wrapper.state("email")).toEqual(userInput);
      });
    });
    describe("CLEAR_INPUT_ERRORS", () => {
      it("should clear input errors in the state", () => {
        wrapper.setState({
          inputErrors: { email: "Email is a required field" }
        });
        wrapperInstance.clearInputErrors();
        expect(wrapper.state("inputErrors").email).toBeUndefined();
      });
    });
    describe("LOGIN", () => {
      it("should set inputErrors if validation fails", () => {
        const wrongEmail = "testergmail.com";
        wrapper.setState({ email: wrongEmail });
        wrapperInstance.login(mockEvent());
        expect(typeof wrapper.state("inputErrors").email).toEqual("string");
      });
      it("should clear inputErrors and dispatch an actions if validation pass", () => {
        wrapper.setState({
          ...sampleUserData,
          inputErrors: { email: "Email is required" }
        });
        wrapperInstance.signin(mockEvent());
        expect(wrapper.state("inputErrors").email).toBeUndefined();
        expect(props.dispatch).toHaveBeenCalledTimes(1);
      });
    });

    describe("COMOPONENT_DID_UPDATE", () => {
      it("should update the state if addingUserError prop value changes", () => {
        const submissionError = "This user already exist";
        expect(wrapper.state("submissionError")).toEqual(null);
        wrapper.setProps({ addingUserError: { message: submissionError } });
        expect(wrapper.state("submissionError")).toEqual(submissionError);
      });
    });
  });
});

describe("<SigninView />", () => {
  const props = {
    addingUserError: null,
    addingUserStarted: false,
    getInput: jest.fn(),
    inputErrors: {},
    login: jest.fn(),
    submissionError: null
  };
  describe("Rendering", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SigninView {...props} />);
    });
    it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

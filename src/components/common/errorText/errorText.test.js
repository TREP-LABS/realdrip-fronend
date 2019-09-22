import React from 'react';
import ErrorText from '.';

describe('<ErrorText />', () => {
  describe('Rendering', () => {
    it('should render nothing when there is no text prop', () => {
      const wrapper = shallow(<ErrorText />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render correctly when there is a text prop', () => {
      const wrapper = shallow(<ErrorText text="I am an error" />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});


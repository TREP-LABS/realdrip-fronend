import React from 'react';
import Spinner from '.';

describe('<Spinner />', () => {
  describe('Rendering', () => {
    it('should render nothing when display prop is not true', () => {
      const wrapper = shallow(<Spinner display={false} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render correctly when display prop is true', () => {
      const wrapper = shallow(<Spinner display height={100} width={100} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});


import React from 'react';
import EmailConfirmation from '.';

describe('<EmailConfirmation />', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<EmailConfirmation />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});


import React from 'react';
import Routes from '.';

describe('<Routes />', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Routes />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});


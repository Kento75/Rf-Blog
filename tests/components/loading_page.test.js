import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../src/components/loading_page';

test('should correctly render LoadingPage', () => {
	const wrapper = shallow(<LoadingPage />);
	expect(wrapper).toMatchSnapshot();
});

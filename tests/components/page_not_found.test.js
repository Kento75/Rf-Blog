import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../src/components/page_not_found';

test('should render NotFoundPage correctly', () => {
	const wrapper = shallow(<NotFoundPage />);
	expect(wrapper).toMatchSnapshot();
});

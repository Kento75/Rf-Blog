import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../src/components/dashboard_page';

test('should render DashboardPage correctly', () => {
	const wrapper = shallow(<DashboardPage />);
	expect(wrapper).toMatchSnapshot();
});

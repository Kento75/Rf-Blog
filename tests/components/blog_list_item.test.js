import React from 'react';
import { shallow } from 'enzyme';

import { BlogListItem } from '../../src/components/blog_list_item';
import blogs from '../fixtures/blogs';

test('should render BlogListItem correctly', () => {
	const wrapper = shallow(<BlogListItem {...blogs[1]} />);
	expect(wrapper).toMatchSnapshot();
});
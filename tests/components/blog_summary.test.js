import React from 'react';
import { shallow } from 'enzyme';

import { BlogSummary } from '../../src/components/blog_summary';

test('should render BlogSummary correctly with single expense', () => {
	const wrapper = shallow(<BlogSummary blogsCount={1}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should render BlogSummary correctly with multiple expenses', () => {
	const wrapper = shallow(<BlogSummary blogsCount={3}/>);
	expect(wrapper).toMatchSnapshot();
});
import React from 'react';
import { shallow } from 'enzyme';

import { AddBlogPage } from '../../src/components/add_blog_page';
import blogs from '../fixtures/blogs';

let wrapper, history, startAddBlog;

beforeEach(() => {
	startAddBlog = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(<AddBlogPage history={history} startAddBlog={startAddBlog} />);
});

test('should render AddBlogPage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
	wrapper.find('BlogForm').prop('onSubmit')(blogs[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startAddBlog).toHaveBeenLastCalledWith(blogs[1]);
});
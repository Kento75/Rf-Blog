import React from 'react';
import { shallow } from 'enzyme';

import { EditBlogPage } from '../../src/components/edit_blog_page';
import blogs from '../fixtures/blogs';

let wrapper, history, startEditBlog, startRemoveBlog;

beforeEach(() => {
	history = { push: jest.fn() };
	startEditBlog = jest.fn();
	startRemoveBlog = jest.fn();
	wrapper = shallow(<EditBlogPage 
		blog={blogs[1]}
		history={history} 
		startEditBlog={startEditBlog} 
		startRemoveBlog={startRemoveBlog} 
	/>);
});

test('should render EditBlogPage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle editBlog', () => {
	wrapper.find('BlogForm').prop('onSubmit')(blogs[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startEditBlog).toHaveBeenLastCalledWith(blogs[1].id, blogs[1]);
});

test('should handle removeBlog', () => {
	wrapper.find('button').simulate('click');
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveBlog).toHaveBeenLastCalledWith({ id: blogs[1].id });
});
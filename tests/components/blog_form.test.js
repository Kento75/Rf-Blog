import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import BlogForm from '../../src/components/blog_form';
import blogs from '../fixtures/blogs';

test('should render BlogForm correctly', () => {
	const wrapper = shallow(<BlogForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render BlogForm correctly with blog data', () => {
	const wrapper = shallow(<BlogForm blog={blogs[1]} />);

	expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
	const wrapper = shallow(<BlogForm />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});

	expect(wrapper.state('error').length).toBeGreaterThan(0);
});

test('should set title on input change', () => {
	const wrapper = shallow(<BlogForm />);
	const value = 'blah';

	wrapper.find('input').at(0).simulate('change', {
		target: { value }
	});

	expect(wrapper.state('title')).toBe(value);
});

test('should set body on textarea change', () => {
	const wrapper = shallow(<BlogForm />);
	const value = '<p>blah</p>';
	wrapper.find('Quill').at(0).simulate('change', value);

	expect(wrapper.state('body')).toBe(value);
});

test('should set title on input change', () => {
	const wrapper = shallow(<BlogForm />);
	const value = 'blah';

	wrapper.find('input').at(0).simulate('change', {
		target: { value }
	});

	expect(wrapper.state('title')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn(); //Test spy
	const wrapper = shallow(<BlogForm blog={blogs[1]} onSubmit={onSubmitSpy} />);

	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenCalledWith({
		title: blogs[1].title,
		body: blogs[1].body,
		createdAt: blogs[1].createdAt,
	});
});
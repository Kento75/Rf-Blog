import React from 'react';
import { shallow } from 'enzyme';

import { BlogListFilters } from '../../src/components/blog_list_filters';
import { filters, altFilters } from '../fixtures/filters';

let wrapper, setTextFilter, sortByDate, sortByTitle;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByTitle = jest.fn();

	wrapper = shallow(<BlogListFilters 
		filters={filters}
		setTextFilter={setTextFilter}
		sortByDate={sortByDate}
		sortByTitle={sortByTitle} />);
});

test('should render BlogListFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change correctly', () => {
	const value = 'blah';
	wrapper.find('input').simulate('change', {
		target: { value }
	});

	expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sortByDate correctly', () => {
	wrapper.setProps({
		filter: altFilters
	});

	wrapper.find('select').simulate('change', {
		target: { value: 'date' }
	});
	expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should sortByTitle correctly', () => {
	wrapper.find('select').simulate('change', {
		target: { value: 'title' }
	});
	expect(sortByTitle).toHaveBeenLastCalledWith();
});
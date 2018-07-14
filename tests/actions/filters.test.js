import moment from 'moment';

import { SET_TEXT_FILTER,
	setTextFilter,
	SORT_BY_DATE,
	sortByDate,
	SORT_BY_TITLE,
	sortByTitle } from '../../src/actions/filters';

test('should generate setTextFilter action object with provided values', () => {
	const text = 'blah';
	const action = setTextFilter(text);
	expect(action).toEqual({
		type: SET_TEXT_FILTER,
		text
	});
});

test('should generate setTextFilter action object with default values', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: SET_TEXT_FILTER,
		text: ''
	});
});

test('should generate sortByDate action object', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: SORT_BY_DATE,
	});
});

test('should generate sortByTitle action object', () => {
	const action = sortByTitle();
	expect(action).toEqual({
		type: SORT_BY_TITLE,
	});
});
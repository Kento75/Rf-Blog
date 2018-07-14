import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_TITLE } from '../../src/actions/filters';
import FiltersReducer from '../../src/reducers/reducer_filters';

test('should setup default filter values', () => {
	const state = FiltersReducer(undefined, { type: '@@INIT' });

	expect(state).toEqual({
		text: '',
		sortBy: 'date'
	});
});

test('should set sortBy to date', () => {
	const defaultState = {
		text: '',
		sortBy: 'title'
	};
	const action = { type: SORT_BY_DATE };
	const state = FiltersReducer(defaultState, action);

	expect(state.sortBy).toBe('date');
});

test('should set sortBy to title', () => {
	const action = { type: SORT_BY_TITLE };
	const state = FiltersReducer(undefined, action);

	expect(state.sortBy).toBe('title');
});

test('should set text filter', () => {
	const action = {
		type: SET_TEXT_FILTER,
		text: 'blah'
	};
	const state = FiltersReducer(undefined, action);

	expect(state.text).toBe('blah');
});
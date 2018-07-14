import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_TITLE } from '../actions/filters';

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date'
};

export default (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
	case SET_TEXT_FILTER:
		return {
			...state,
			text: action.text
		};
	case SORT_BY_DATE:
		return {
			...state,
			sortBy: 'date'
		};
	case SORT_BY_TITLE:
		return {
			...state,
			sortBy: 'title'
		};
	default:
		return state;
	}
};
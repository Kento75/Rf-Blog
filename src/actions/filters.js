// SET_TEXT_FILTER
export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';

export const setTextFilter = (text = '') => ({
	type: SET_TEXT_FILTER,
	text
});

// SORT_BY_DATE
export const SORT_BY_DATE = 'SORT_BY_DATE';

export const sortByDate = () => ({
	type: SORT_BY_DATE
});

// SORT_BY_TITLE
export const SORT_BY_TITLE = 'SORT_BY_TITLE';

export const sortByTitle = () => ({
	type: SORT_BY_TITLE
});
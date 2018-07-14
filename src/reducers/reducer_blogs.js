import { ADD_BLOG, EDIT_BLOG, REMOVE_BLOG, SET_BLOG, GET_BLOG } from '../actions/blogs';

const blogsReducerDefaultState = [];

export default (state = blogsReducerDefaultState, action) => {
	switch (action.type) {
	case ADD_BLOG:
		return [
			...state,
			action.blog
		];
	case EDIT_BLOG:
		return state.map((blog) => {
			if (blog.id === action.id) {
				return {
					...blog,
					...action.updates
				};
			} else {
				return blog;
			}
		});
	case REMOVE_BLOG: 
		return state.filter(({ id }) => id !== action.id);
	case SET_BLOG:
		return action.blogs;
	case GET_BLOG: 
		return [
			...state,
			action.blog
		];
	default:
		return state;
	}
};
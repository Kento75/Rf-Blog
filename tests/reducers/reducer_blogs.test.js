import { ADD_BLOG, REMOVE_BLOG, EDIT_BLOG, SET_BLOG, GET_BLOG } from '../../src/actions/blogs';
import BlogsReducer from '../../src/reducers/reducer_blogs';
import blogs from '../fixtures/blogs';

test('should set default state', () => {
	const state = BlogsReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove an blog if id is found', () => {
	const action = {
		type: REMOVE_BLOG,
		id: blogs[1].id
	};
	const state = BlogsReducer(blogs, action);

	expect(state).toEqual([
		blogs[0],
		blogs[2]
	]);
});

test('should remove an blog if id is not found', () => {
	const action = {
		type: REMOVE_BLOG,
		id: '-1'
	};
	const state = BlogsReducer(blogs, action);

	expect(state).toEqual(blogs);
});

test('should add blog', () => {
	const action = {
		type: ADD_BLOG,
		blog: {
			id: 'zzz123',
			title: 'blah',
			body: 'blah',
			createdAt: 1000
		}
	};
	const state = BlogsReducer(blogs, action);

	expect(state).toEqual([
		...blogs,
		action.blog
	]);
});

test('should edit blog if id is found', () => {
	const action = {
		type: EDIT_BLOG,
		id: blogs[1].id,
		updates: {
			title: 'blah'
		}
	};
	const state = BlogsReducer(blogs, action);
	
	expect(state[1].title).toBe('blah');
});

test('should not edit blog if id is not found', () => {
	const action = {
		type: EDIT_BLOG,
		id: '-1',
		updates: {
			title: 'blah'
		}
	};
	const state = BlogsReducer(blogs, action);
	
	expect(state).toEqual(blogs);
});

test('should set blogs', () => {
	const action = {
		type: SET_BLOG,
		blogs: [blogs[1]]
	};
	const state = BlogsReducer(blogs, action);

	expect(state).toEqual([blogs[1]]);
});
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import database from '../../src/firebase/firebase';
import { ADD_BLOG,
	startAddBlog,
	addBlog,
	REMOVE_BLOG,
	startRemoveBlog,
	removeBlog,
	EDIT_BLOG,
	startEditBlog,
	editBlog,
	SET_BLOG,
	startSetBlogs,
	setBlogs,
	GET_BLOG,
	startGetBlog } from '../../src/actions/blogs';
import blogs from '../fixtures/blogs';

const createMockStore = configureMockStore([thunk]);
const uid = 'sometestuid';
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
	const blogsData = {};
	blogs.forEach(({ id, title, body, createdAt }) => {
		blogsData[id] = { title, body, createdAt };
	});
	database.ref(`users/${uid}/blogs`).set(blogsData).then(() => done());
});

test('should setup removeBlog action object', () => {
	const id = blogs[1].id;
	const action = removeBlog({ id });
	expect(action).toEqual({
		type: REMOVE_BLOG,
		id
	});
});

test('should remove blog from firebase and store', (done) => {
	const store = createMockStore(defaultAuthState);
	const id = blogs[1].id;
	
	store.dispatch(startRemoveBlog({ id })).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: REMOVE_BLOG,
			id
		});

		return database.ref(`users/${uid}/blogs/${id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toBeFalsy();
		done();
	});
});

test('should setup editBlog action object', () => {
	const id = blogs[1].id, updates = { title: 'New note value' };
	const action = editBlog(id, updates);
	expect(action).toEqual({
		type: EDIT_BLOG,
		id,
		updates
	});
});

test('should update blog in firebase and store', (done) => {
	const store = createMockStore(defaultAuthState);
	const { id } = blogs[1];
	const updates = { title: 'New note value' };

	store.dispatch(startEditBlog(id, updates)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: EDIT_BLOG,
			id,
			updates
		});

		return database.ref(`users/${uid}/blogs/${id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val().title).toBe(updates.title);
		done();
	});
});



test('should setup addBlog action object with provided values', () => {
	const blog = blogs[1];
	const action = addBlog(blog);
	expect(action).toEqual({
		type: ADD_BLOG,
		blog
	});
});

test('should add blog with provided values to firebase and store', (done) => {
	const store = createMockStore(defaultAuthState);
	const { title, body, createdAt } = blogs[1];
	const blogData = { title, body, createdAt };
	
	store.dispatch(startAddBlog(blogData)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: ADD_BLOG,
			blog: {
				id: expect.any(String),
				...blogData
			}
		});

		return database.ref(`users/${uid}/blogs/${actions[0].blog.id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(blogData);
		done();
	});
});

test('should add blog with default values to firebase and store', (done) => {
	const store = createMockStore(defaultAuthState);
	const blogData = { title: '', body: '', createdAt: 0 };

	store.dispatch(startAddBlog()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: ADD_BLOG,
			blog: {
				id: expect.any(String),
				...blogData
			}
		});

		return database.ref(`users/${uid}/blogs/${actions[0].blog.id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(blogData);
		done();
	});
});

test('should setup setBlogs action object with data', () => {
	const action = setBlogs(blogs);
	expect(action).toEqual({
		type: SET_BLOG,
		blogs
	});
});

test('should fetch blogs from firebase', (done) => {
	const store = createMockStore(defaultAuthState);
	store.dispatch(startSetBlogs()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: SET_BLOG,
			blogs
		});
		done();
	});
});

test('should fetch single blog from firebase with id provided', (done) => {
	const store = createMockStore();
	const id = blogs[1].id;

	store.dispatch(startGetBlog({ id })).then(() => {
		return database.ref(`users/${uid}/blogs/${id}`).once('value');
	}).then((snapshot) => {
		const { title, body, createdAt } = blogs[1];
		expect(snapshot.val()).toEqual({ title, body, createdAt });
		done();
	});
});
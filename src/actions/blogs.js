import database from '../firebase/firebase';

// ADD_BLOG
export const ADD_BLOG = 'ADD_BLOG';

export const addBlog = (blog) => ({
	type: ADD_BLOG,
	blog
});

export const startAddBlog = (blogData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const {
			title = '',
			body = '',
			createdAt = 0
		} = blogData;

		const blog = { title, body, createdAt };

		return database.ref(`users/${uid}/blogs`).push(blog).then((ref) => {
			dispatch(addBlog({ id: ref.key, ...blog }));
		});
	};
};

// REMOVE_BLOG
export const REMOVE_BLOG = 'REMOVE_BLOG';

export const removeBlog = ({ id } = {}) => ({
	type: REMOVE_BLOG,
	id
});

export const startRemoveBlog = ({ id }) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;

		return database.ref(`users/${uid}/blogs/${id}`).remove().then(() => {
			dispatch(removeBlog({ id }));
		});
	};
};

// EDIT_BLOG
export const EDIT_BLOG = 'EDIT_BLOG';

export const editBlog = (id, updates) => ({
	type: EDIT_BLOG,
	id,
	updates
});

export const startEditBlog = (id, updates) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;

		return database.ref(`users/${uid}/blogs/${id}`).update(updates).then(() => {
			dispatch(editBlog(id, updates));
		});
	};
};

// SET_BLOG
export const SET_BLOG = 'SET_BLOG';

export const setBlogs = (blogs) => ({
	type: SET_BLOG,
	blogs
});

export const startSetBlogs = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;

		return database.ref(`users/${uid}/blogs`).once('value').then((snapshot) => {
			const blogs = [];
			snapshot.forEach((blog) => {
				blogs.push({
					id: blog.key,
					...blog.val()
				});
			});
			dispatch(setBlogs(blogs));
		});
	};
};

// GET_BLOG - To fetch the blog based on id
export const startGetBlog = ({ id }) => {
	return () => {
		return database.ref(`users`).once('value').then((snapshot) => {
			let blog;
			snapshot.forEach((child) => {
				blog = child.val().blogs[id];
			});
			return blog;
		});
	};
};
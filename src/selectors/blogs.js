export default (blogs, { text, sortBy }) => {
	return blogs.filter((blog) => {
		const titleMatch = blog.title.toLowerCase().includes(text.toLowerCase());

		return titleMatch;
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		}
	});
};
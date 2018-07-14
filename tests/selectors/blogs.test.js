import selectBlogs from '../../src/selectors/blogs';
import blogs from '../fixtures/blogs';

test('should filter by text value', () => {
	const filters = {
		text: 'React',
		sortBy: 'title'
	};
	const result = selectBlogs(blogs, filters);

	expect(result).toEqual([
		blogs[2]
	]);
});

test('should filter by date', () => {
	const filters = {
		text: '',
		sortBy: 'date'
	};
	const result = selectBlogs(blogs, filters);

	expect(result).toEqual([
		blogs[1],
		blogs[0],
		blogs[2]
	]);
});
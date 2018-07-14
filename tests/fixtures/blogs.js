import moment from 'moment';

export default [
	{
		id: '123abc',
		title: 'Write a Nodejs app',
		body: 'Here is how to do it',
		createdAt: 0
	},
	{
		id: 'pqr567',
		title: 'Write a Angular app',
		body: 'Directives, Lazy Load',
		createdAt: moment(0).add(4, 'days').valueOf()
	},
	{
		id: 'xyz987',
		title: 'Write a React app',
		body: 'componentWillMount()',
		createdAt: moment(0).subtract(4, 'days').valueOf()
	}
];
import React from 'react';

import BlogListFilters from './blog_list_filters';
import BlogList from './blog_list';
import BlogSummary from './blog_summary';

const DashboardPage = () => (
	<div>
		<BlogSummary />
		<BlogListFilters />
		<BlogList />
	</div>
);

export default DashboardPage;

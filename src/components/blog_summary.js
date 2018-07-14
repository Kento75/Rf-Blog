import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectBlogs from '../selectors/blogs';

export const BlogSummary = (props) => (
	<div className="page-header">
		<div className="content-container">
			<h3 className="page-header__title align-left">
				Viewing <strong>{props.blogsCount} posts</strong>
			</h3>
			<div className="page-header__action align-right">
				<Link className="button" to="/create">Add Post</Link>
			</div>
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	blogsCount: selectBlogs(state.blogs, state.filters).length
});

export default connect(mapStateToProps)(BlogSummary);
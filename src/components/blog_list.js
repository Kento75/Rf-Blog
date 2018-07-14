import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlogListItem from './blog_list_item';
import selectBlogs from '../selectors/blogs';

export const BlogList = (props) => (
	<div className="content-container">
		<div className="list-header">
			<div className="show-for-mobile">Blogs</div>
			<div className="show-for-desktop">Blog</div>
			<div className="show-for-desktop">Posted on</div>
		</div>
		<div className="list-body">
			{
				props.blogs.length === 0 ? (
					<p className="list-item list-item--message">No Blogs. Write one now!</p>
				) : (
					props.blogs.map((blog) => {
						return <BlogListItem key={blog.id} {...blog} />;
					})
				)
			}
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	blogs: selectBlogs(state.blogs, state.filters)
});

export default connect(mapStateToProps)(BlogList);
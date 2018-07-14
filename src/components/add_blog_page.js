import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlogForm from './blog_form';
import { startAddBlog } from '../actions/blogs';

export class AddBlogPage extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(blog) {
		this.props.startAddBlog(blog);
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Add Blog</h1>
					</div>
				</div>
				<div className="content-container">
					<BlogForm onSubmit={this.handleSubmit} />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddBlog: (blog) => dispatch(startAddBlog(blog))
});

export default connect(undefined, mapDispatchToProps)(AddBlogPage);
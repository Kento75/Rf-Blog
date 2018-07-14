import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BlogForm from './blog_form';
import { startEditBlog, startRemoveBlog } from '../actions/blogs';

export class EditBlogPage extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleSubmit(blog) {
		this.props.startEditBlog(this.props.blog.id, blog);
		this.props.history.push('/');
	}	

	handleClick(e) {
		this.props.startRemoveBlog({ id: this.props.blog.id });
		this.props.history.push('/');
	}
	
	render() {
		const readableLink = `${window.location.origin}/read/${this.props.blog.id}`;
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Edit Blog</h1>
						Blog readable at <Link to={`/read/${this.props.blog.id}`}>{readableLink}</Link>
					</div>
				</div>
				<div className="content-container">
					<BlogForm blog={this.props.blog} onSubmit={this.handleSubmit} />
					<button className="button button--secondary" onClick={this.handleClick}>Remove Blog</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	blog: state.blogs.find((blog) => blog.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
	startEditBlog: (id, updates) => dispatch(startEditBlog(id, updates)),
	startRemoveBlog: (id) => dispatch(startRemoveBlog(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPage);
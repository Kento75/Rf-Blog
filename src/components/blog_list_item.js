import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const BlogListItem = ({ id, title, createdAt }) => (
	<Link className="list-item" to={`/edit/${id}`}>
		<div>
			<h4 className="list-item__title">{title}</h4>
			<span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
		</div>
	</Link>
);

const mapStateToProps = (state) => ({
	blogs: state.blogs
});

export default connect(mapStateToProps)(BlogListItem);
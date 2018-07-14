import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from './header';
import { startGetBlog } from '../actions/blogs';

class ReadBlogPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Loading title...',
			body: 'Loading body...',
			createdAt: 0
		};

	}

	componentDidMount() {
		this.props.blog().then((data) => {
			if (data) {
				this.setState(data);
			} else {
				this.props.history.push('/postnotfound');
			}
		});
	}

	render() {
		return (
			<div>
				<Header />
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">{this.state.title}</h1>
						<div className="date">{moment(this.state.createdAt).format('LLL')}</div>
					</div>
				</div>
				<div className="content-container">
					<div dangerouslySetInnerHTML={{__html: this.state.body}}></div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => ({
	blog: () => dispatch(startGetBlog({ id: props.match.params.id }))
});

export default connect(undefined, mapDispatchToProps)(ReadBlogPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByDate, sortByTitle } from '../actions/filters';

export class BlogListFilters extends Component {
	constructor(props) {
		super(props);

		this.handleSortByChange = this.handleSortByChange.bind(this);
		this.handleTextFilterChange = this.handleTextFilterChange.bind(this);
	}

	handleSortByChange(e) {
		switch (e.target.value) {
		case 'date':
			this.props.sortByDate();
			break;
		case 'title':
			this.props.sortByTitle();
			break;
		default:
			break;
		}	
	}

	handleTextFilterChange(e) {
		this.props.setTextFilter(e.target.value);
	}

	render() {
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input className="text-input" type="text" placeholder="Search Posts..." value={this.props.filters.text} onChange={this.handleTextFilterChange} />
					</div>
					<div className="input-group__item">
						<select className="select" value={this.props.filters.sortBy} onChange={this.handleSortByChange}>
							<option value="date">Date</option>
							<option value="amount">Title</option>
						</select>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByTitle: () => dispatch(sortByTitle())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogListFilters);
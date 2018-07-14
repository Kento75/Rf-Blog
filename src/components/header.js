import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

export const Header = ({ startLogout, isAuthenticated, history }) => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<Link className="header__title" to="/dashboard">
					<h1>Blogger</h1>
				</Link>
				{isAuthenticated && <button className="button button--link" onClick={() => { startLogout(); history.push('/'); }}>Logout</button>}
			</div>
		</div>
	</header>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

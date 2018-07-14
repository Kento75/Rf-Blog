import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DashboardPage from '../components/dashboard_page';
import AddBlogPage from '../components/add_blog_page';
import EditBlogPage from '../components/edit_blog_page';
import ReadBlogPage from '../components/read_blog_page';
import NotFoundPage from '../components/page_not_found';
import LoginPage from '../components/login_page';
import PrivateRoute from './private_route';
import PublicRoute from './public_route';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/dashboard" component={DashboardPage} />
				<PrivateRoute path="/create" component={AddBlogPage} />
				<PrivateRoute path="/edit/:id" component={EditBlogPage} />
				<Route path="/read/:id" component={ReadBlogPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AppRouter, { history } from './routes/app_router';
import LoadingPage from './components/loading_page';
import reducers from './reducers';

import { startSetBlogs } from './actions/blogs';
import { login, logout } from './actions/auth';

import registerServiceWorker from './registerServiceWorker';

import { firebase } from './firebase/firebase';

import '../styles/styles.scss';

const store = createStore(reducers, applyMiddleware(thunk)); // create store with middleware

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(
			<Provider store={store}>
				<AppRouter />
			</Provider>
			, document.getElementById("root"));
		hasRendered = true;
	}
};

registerServiceWorker();

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetBlogs()).then(() => {
			renderApp();
			if (history.location.pathname === '/') {
				history.push('/dashboard');
			}
		});
	} else if (history.location.pathname.startsWith('/read')) {
		renderApp();
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});
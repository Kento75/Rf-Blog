import { combineReducers } from 'redux';

import AuthReducer from './reducer_auth';
import BlogsReducer from './reducer_blogs';
import FiltersReducer from './reducer_filters';

const rootReducer = combineReducers({
	auth: AuthReducer,
	blogs: BlogsReducer,
	filters: FiltersReducer
});

export default rootReducer;

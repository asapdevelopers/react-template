import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import videos from './videos';
import auth from './auth';

const rootReducer = combineReducers({
    videos,
    auth,
    routing: routerReducer
});

export default rootReducer;
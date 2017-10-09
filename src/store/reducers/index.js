import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import photos from './photos';
import auth from './auth';

const rootReducer = combineReducers({
    photos,
    auth,
    routing: routerReducer
});

export default rootReducer;
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
//history
import createHistory from 'history/createBrowserHistory';
//saga
import createSagaMiddleware from 'redux-saga';
import AuthSaga from './sagas/authSaga';
import PhotosSaga from './sagas/photosSaga';
// import root reducer
import rootReducer from './reducers/index';


// create middlewares
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
);

let authData = {};
if (localStorage.auth) {
    authData = JSON.parse(localStorage.auth);
}

const defaultState = {
    auth: {
        token: authData.token,
        error: null,
        registration: false,
        email: authData.email,
        first_name: authData.first_name,
        last_name: authData.last_name,
    },
    photos: []
};

// Use Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware);

// Create the store
export const store = createStore(rootReducer, defaultState, enhancer);

// Run saga middleware
sagaMiddleware.run(AuthSaga);
sagaMiddleware.run(PhotosSaga);
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
//history
import createHistory from 'history/createBrowserHistory';
//saga
import createSagaMiddleware from 'redux-saga';
// import root reducer
import rootReducer from './reducers/index';
import AuthSaga from './sagas/authSaga';

// create middlewares
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
);


const defaultState = {
    auth: {
        token: localStorage.getItem('token'),
        error: null
    },
    videos: [{
            id: 1,
            title: "Test 1",
            comments: ["hola mundo"],
            likes: 5
        },
        {
            id: 2,
            title: "Test 2",
            comments: ["hola mundo"],
            likes: 10
        }
    ]
};

// Use Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(middleware);

// Create the store
export const store = createStore(rootReducer, defaultState, enhancer);

// Run saga middleware
sagaMiddleware.run(AuthSaga);
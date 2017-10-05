import { createStore, applyMiddleware} from 'redux';
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
    auth:{
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

// Create the store
export const store = createStore(rootReducer, defaultState, middleware);

// Run saga middleware
sagaMiddleware.run(AuthSaga);
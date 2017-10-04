import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

// import root reducer
import rootReducer from './reducers/index';

const defaultState = {
    login:{
        username: "",
        password: "",
    }
    user: {
        username: null,
        full_name: null
    },
    videos: [{ id: 1, title: "Test 1" }, { id: 2, title: "Test 2" }];
}

export default const store = createStore(rootReducer, defaultState);
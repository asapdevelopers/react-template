import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import registerServiceWorker from './registerServiceWorker';
//history
import createHistory from 'history/createBrowserHistory';
//saga
import createSagaMiddleware from 'redux-saga';
// redux
import { Provider } from 'react-redux';
import { store } from './store/store'
// react router deps
import { Router, Route, BrowserRouter } from 'react-router-dom'
// pages
import Login from './pages/login/login'
import Home from './pages/home/home'

const router = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
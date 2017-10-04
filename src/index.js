import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// react router deps
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
// pages
import Login from './pages/login/login'
import Home from './pages/home/home'

const router = (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
        </div>
    </Router>
)
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
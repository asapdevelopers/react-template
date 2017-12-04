import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import registerServiceWorker from './registerServiceWorker';
// redux
import { Provider } from 'react-redux';
import { store } from './store/store';
// react router deps
import { Route, BrowserRouter } from 'react-router-dom';
// pages
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';

const router = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
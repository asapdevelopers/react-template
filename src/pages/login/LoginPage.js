import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Login } from '../../components/Login/Login';
import * as AuthActions from '../../store/actions/auth';
import './LoginPage.css';

class LoginPage extends PureComponent {

    render() {
        const {authActions} = this.props;
        const { token } = this.props.auth;
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (token) {
            return (<Redirect to={from}/>);
        }

        return (
            <div className="login-page">
                <div className="login-component d-flex flex-row">
                    <Login onLogin={authActions.authorize}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(AuthActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
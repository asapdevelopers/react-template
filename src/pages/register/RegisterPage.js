import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Register } from '../../components/Register/Register';
import * as AuthActions from '../../store/actions/auth';
import './RegisterPage.css';

class RegisterPage extends PureComponent {

    render() {
        const { token, registration } = this.props.auth;
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (token) {
            return (<Redirect to={from}/>);
        }
        if (registration) {
            return <Redirect to='/login'/>;
        }

        return (
            <div className="login-page">
                <div className="login-component d-flex flex-row">
                    <Register onRegister={this.props.authActions.register}/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));
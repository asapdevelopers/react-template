import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton/CustomButton'
import * as AuthActions from '../../store/actions/auth';
import { authorize } from '../../store/reducers/auth';
import './login.css';

class Login extends PureComponent {
    constructor(props, auth, authActions) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    login = () => {
        if (this.state.username.length !== 0 && this.state.password.length !== 0) {
            console.log("username: " + this.state.username);
            console.log("password: " + this.state.password);
        }
    };

    onSubmit = () => {
        const { username, password } = this.state;
        this.props.authActions.authorize(username, password);
    };

    render() {
        const { error, token } = this.props.auth;

        /*if (token) {
            return <Redirect to="/" />;
        }*/

        return (
            <div className="Login">              
                <h1>Login</h1>      
                <div className="form">
                    <input type="text" placeholder="Username" value={this.state.username} onChange={(event)=> this.setState({"username": event.target.value})} />      
                    <input type="text" placeholder="Password" value={this.state.password} onChange={(event)=> this.setState({"password": event.target.value})} />
                    <CustomButton onClick={this.onSubmit.bind(this)} label="Login" primary={true}>Login</CustomButton>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
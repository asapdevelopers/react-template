import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    login = () => {
        if (this.state.username.length !== 0 && this.state.password.length !== 0) {
            /*this.props.login({
                username: this.state.username,
                password: this.state.password
            })*/
            console.log("username: " + this.state.username);
            console.log("password: " + this.state.password);
        }
    }

    render() {
        return (
            <div className="Login">              
                <h1>Login</h1>      
                <div className="form">
                    <input type="text" placeholder="Username" value={this.state.username} onChange={(event)=> this.setState({"username": event.target.value})} />      
                    <input type="text" placeholder="Password" value={this.state.password} onChange={(event)=> this.setState({"password": event.target.value})} />
                    <button onClick={this.login}>Login</button>
                </div>
                 <Link to="/">Back to Home</Link> 
            </div>
        );
    }
}

export default Login;
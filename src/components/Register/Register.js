import React, { Component } from "react";
import { Button } from "../../components/Button/Button";
import { Redirect } from "react-router-dom";
import "./Register.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      redirectToLogin: false
    };
  }

  register = () => {
    const { username, password, first_name, last_name } = this.state;
    this.props.onRegister(username, password, first_name, last_name);
  };

  render() {
    const {
      username,
      password,
      first_name,
      last_name,
      redirectToLogin
    } = this.state;

    if (redirectToLogin) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <div className="logo" />
        <div className="Register d-flex flex-column align-items-center justify-content-center">
          <div className="form p-6">
            <h1>Register</h1>
            <div>
              <input
                className="text"
                type="email"
                placeholder="Email"
                value={username}
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
              />
              <input
                className="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
              <input
                className="text"
                type="text"
                placeholder="First name"
                value={first_name}
                onChange={event =>
                  this.setState({ first_name: event.target.value })
                }
              />
              <input
                className="text"
                type="text"
                placeholder="Last name"
                value={last_name}
                onChange={event =>
                  this.setState({ last_name: event.target.value })
                }
              />
            </div>
            <div className="d-flex flew-row justify-content-center">
              <div className="mx-3 w-50">
                <Button
                  onClick={() => this.setState({ redirectToLogin: true })}
                  secondary={true}
                >
                  Back to Login
                </Button>
              </div>
              <div className="mx-3 w-50">
                <Button onClick={this.register.bind(this)} primary={true}>
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

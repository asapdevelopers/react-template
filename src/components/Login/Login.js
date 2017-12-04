import React, { Component } from "react";
import { Button } from "../Button/Button";
import { Redirect } from "react-router-dom";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectToRegister: false
    };
  }

  login = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.onLogin(username, password);
  };

  render() {
    const { username, password, redirectToRegister } = this.state;

    if (redirectToRegister) {
      return <Redirect to="/register" />;
    }
    return (
      <div>
        <div className="logo" />
        <div className="Login d-flex flex-column align-items-center justify-content-center">
          <div className="form p-6">
            <form onSubmit={this.login.bind(this)}>
              <h1>Login</h1>
              <div>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={event =>
                    this.setState({ username: event.target.value })
                  }
                />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                />
              </div>
              <div className="d-flex flew-row justify-content-center">
                <div className="mx-3 w-50">
                  <Button
                    type="button"
                    onClick={() => this.setState({ redirectToRegister: true })}
                    secondary={true}
                  >
                    Register
                  </Button>
                </div>
                <div className="mx-3 w-50">
                  <Button type="submit" primary={true}>
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

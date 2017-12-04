import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import * as GithubActions from "../../store/actions/github";
import * as AuthActions from "../../store/actions/auth";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import "./HomePage.css";

class HomePage extends Component {
  componentDidMount() {
    this.props.githubActions.list();
  }

  render() {
    const { auth, github } = this.props;

    if (auth.token) {
      return (
        <div className="App">
          <Header
            onLogout={this.props.authActions.logout}
            username={auth.first_name}
          />
          <h2 className="ml-3">React projects on Github</h2>
          <div className="videoList d-flex flex-wrap justify-content-around">
            {github &&
              github.items &&
              github.items.map(item => (
                <div key={item.id} className="card-container mt-8">
                  <Card
                    id={item.id}
                    title={item.name}
                    url={item.html_url}
                    image={item.owner.avatar_url}
                    likes={item.stargazers_count}
                    description={item.description}
                  />
                </div>
              ))}
            <div />
          </div>
        </div>
      );
    } else {
      return (
        <Redirect
          to={{ pathname: "/login", state: { from: this.props.location } }}
        />
      );
    }
  }
}

// react-redux implementation
const mapStateToProps = state => ({
  github: state.github,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  githubActions: bindActionCreators(GithubActions, dispatch),
  authActions: bindActionCreators(AuthActions, dispatch)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);

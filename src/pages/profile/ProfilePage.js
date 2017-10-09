import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom';
import * as AuthActions from '../../store/actions/auth';

class ProfilePage extends Component {

    render() {
       const { auth } = this.props;

        if (auth.token) {
            return (
                <div className="Profile">              
                    <h1>Profile page</h1> 
                </div>
            )
        } else {
            return (<Redirect to={{ pathname: '/login', state: { from: this.props.location } }}/>)
        }
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(AuthActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
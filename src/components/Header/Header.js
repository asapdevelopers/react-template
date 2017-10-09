import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export class Header extends Component {
    render() {
            return (
                <div className="header d-flex flex-row justify-content-between">
                    <img alt="" className="m-5" height="25" src={'http://i.imgur.com/fd8Lcso.png'}></img>
                    <div className="m-5 d-flex flex-row justify-content-around">
                        <span className="username mr-3">{this.props.username}</span>
                        <Link className="link" to="/login" onClick={this.props.onLogout}>Logout</Link> 
                    </div>
                </div>
        );
    }
}
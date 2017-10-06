import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import * as VideoActions from '../../store/actions/videos';
import * as AuthActions from '../../store/actions/auth';

const Home = ({ videos, auth, videoActions }) => (
    <div className="App">              
        <h1>Videos</h1>      
        <div className="videoList">
        {videos.map(item => 
            <div className="video" key={item.id}>
                <span>{item.title}</span> - <span>{item.likes}</span> likes
            </div>
            )} 
        </div>
        <Link to="/login">Logout</Link> 
    </div>
)

// react-redux implementation
const mapStateToProps = state => ({
    videos: state.videos,
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    videoActions: bindActionCreators(VideoActions, dispatch),
    authActions: bindActionCreators(AuthActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
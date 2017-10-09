import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom';
import * as PhotoActions from '../../store/actions/photos';
import * as AuthActions from '../../store/actions/auth';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import './HomePage.css';

class HomePage extends Component {

    componentDidMount() {
        this.props.photoActions.list();
    }

    render() {
        const { auth, photos, photoActions } = this.props;

        if (auth.token) {
            return (
                <div className="App">  
                    <Header onLogout={this.props.authActions.logout} username={auth.first_name}/>
                    <h1>Photos</h1>      
                    <div className="videoList d-flex flex-wrap justify-content-around">
                        {photos.map(item => (
                            <div key={item.id} className="card-container mt-5"><Card id={item.id} title={item.title} url={item.url} likes={item.likes} onLike={photoActions.like}/>
                            </div>
                            ))} 
                    </div>
                </div>
            )
        } else {
            return (<Redirect to={{ pathname: '/login', state: { from: this.props.location } }}/>)
        }
    }
}

// react-redux implementation
const mapStateToProps = state => ({
    photos: state.photos,
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    photoActions: bindActionCreators(PhotoActions, dispatch),
    authActions: bindActionCreators(AuthActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
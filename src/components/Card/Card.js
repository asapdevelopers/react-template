import React, { Component } from 'react';
import './Card.css';
import {Button} from '../Button/Button';

export class Card extends Component {

    render() {
        const { id, url, title, likes } = this.props;
        return (
            <div className="card">
              <img src={url} alt="" />
              <div className="container d-flex flex-column  align-items-end">
                <h4>{title}</h4> 
                <div className="card-footer d-flex flex-row align-items-center">
                    <p className="mr-2">{likes}</p>
                    <Button flat={true} onClick={this.props.onLike.bind(null, id)}>Like</Button>
                </div> 
              </div>
            </div>
        );
    }
}
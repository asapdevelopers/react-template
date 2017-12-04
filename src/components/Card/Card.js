import React, { Component } from "react";
import "./Card.css";
import { Button } from "../Button/Button";
import GoStar from "react-icons/lib/go/star";

export class Card extends Component {
  render() {
    const { id, url, title, likes, description, image } = this.props;
    return (
      <div className="card">
        <img src={image} alt="" />
        <div className="container d-flex flex-column">
          <a target="_blank" href={url}>{title}</a>
          <p>{description}</p>
          <div className="card-footer d-flex flex-row align-items-center mt-5">
            <GoStar />
            <p className="ml-1 ">{likes}</p>
          </div>
        </div>
      </div>
    );
  }
}

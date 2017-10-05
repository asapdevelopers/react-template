import React, { Component } from 'react';
import './CustomButton.css';

export class CustomButton extends React.Component {

    rootClassNames() {
        let names = ['btn'];
        if (this.props.primary) names.push('btn-primary');
        if (this.props.secondary) names.push('btn-secondary');
        if (this.props.flat) names.push('btn-flat');
        return names.join(' ');
    }

    render() {
        return (
            <button className={this.rootClassNames()} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

CustomButton.defaultProps = {
    primary: true,
    secondary: false,
    flat: false
};
import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        return (
            <div>
                <strong>{this.props.en}</strong>
                <p>{this.props.vn}</p>
            </div>
        );
    }
}

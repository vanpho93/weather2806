import React, { Component } from 'react';
import { connect } from 'react-redux';

class BoxController extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.dispatch({ type: 'UP' })}>
                +</button>
                <button onClick={() => this.props.dispatch({ type: 'UP' })}>
                -</button>
            </div>
        );
    }
}

export default connect()(BoxController);

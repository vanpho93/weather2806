import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxController from './BoxController';

class Box extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                <BoxController />
            </div>
        );
    }
}

const mapStateToProps = state => ({ value: state.value });

export default connect(mapStateToProps)(Box);
/*
    state -> trang thai cua ung dung -> object

    action -> chi thi { type: ..., [...] }

    reducer -> pure function state + action -> state moi

    store -> doi tuong quan ly state. store = createStore(reducer);
*/
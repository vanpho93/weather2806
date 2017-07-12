import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../redux/actionCreator';

class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.onGetTemp = this.onGetTemp.bind(this);
    }

    onGetTemp() {
        const cityName = this.refs.txtCityName.value;
        this.refs.txtCityName.value = '';
        this.props.getTempByCity(cityName);
    }

    render() {
        return (
            <div>
                <br />
                <input type="text" placeholder="Enter city name" ref="txtCityName" />
                <br /><br />
                <button onClick={this.onGetTemp}>Get Temp</button>
            </div>
        );
    }
}

export default connect(null, actionCreator)(WeatherForm);

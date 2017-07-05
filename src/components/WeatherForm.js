import React, { Component } from 'react';
import getTemp from '../api/getTemp';

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.onGetTemp = this.onGetTemp.bind(this);
    }

    onGetTemp() {
        const cityName = this.refs.txtCityName.value;
        this.refs.txtCityName.value = '';
        getTemp(cityName)
        .then(temp => console.log(temp));
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

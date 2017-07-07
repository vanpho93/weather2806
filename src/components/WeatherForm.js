import React, { Component } from 'react';
import getTemp from '../api/getTemp';

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.onGetTemp = this.onGetTemp.bind(this);
    }

    onGetTemp() {
        this.props.handleToggleIsLoading();
        const cityName = this.refs.txtCityName.value;
        this.refs.txtCityName.value = '';
        getTemp(cityName)
        .then(temp => this.props.handleOnReceiveTemp(cityName, temp))
        .catch(() => {
            alert('Can not find city');// eslint-disable-line
            this.props.handleError();
        });
    }

    render() {
        console.log('RENDER');
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

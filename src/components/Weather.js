import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            cityName: null,
            temp: null
        };
        this.onReceiveTemp = this.onReceiveTemp.bind(this);
    }

    onReceiveTemp(cityName, temp) {
        this.setState({ cityName, temp });
    }

    render() {
        const { isLoading, cityName, temp } = this.state;
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherMessage 
                    isLoading={isLoading}
                    cityName={cityName}
                    temp={temp}
                />
                <WeatherForm 
                    handleOnReceiveTemp={this.onReceiveTemp}
                />
            </div>
        );
    }
}

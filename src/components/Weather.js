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
        this.toggleIsLoading = this.toggleIsLoading.bind(this);
        this.onGetError = this.onGetError.bind(this);
    }

    onReceiveTemp(cityName, temp) {
        this.setState({ cityName, temp, isLoading: false });
    }

    onGetError() {
        this.setState({ isLoading: false, cityName: null, temp: null });
    }

    toggleIsLoading() {
        this.setState(prevState => ({ isLoading: !prevState.isLoading }));
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
                    handleToggleIsLoading={this.toggleIsLoading}
                    handleError={this.onGetError}
                />
            </div>
        );
    }
}

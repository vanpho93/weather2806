import React, { Component } from 'react';

export default class WeatherMessage extends Component {
    getMessage() {
        const { isLoading, cityName, temp } = this.props;
        if (isLoading) return 'Loading...';
        if (!cityName) return 'Enter your city name';
        return `${cityName} is now ${temp}oC`;
    }
    render() {
        return (
            <div>
                <strong>{this.getMessage()}</strong>
            </div>
        );
    }
}

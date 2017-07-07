import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherMessage extends Component {
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

const mapStateToProps = (state) => ({ 
    isLoading: state.isLoading,
    cityName: state.cityName,
    temp: state.temp 
});

export default connect(mapStateToProps)(WeatherMessage);

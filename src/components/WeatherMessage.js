import React, { Component } from 'react';

export default class WeatherMessage extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR');
    }

    componentWillMount() {
        console.log('WILL MOUNT');
    }

    componentDidMount() {
        console.log('DID MOUNT');
    }

    componentWillReceiveProps() {
        console.log('RECEIVE PROPS');
    }

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

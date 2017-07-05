import React, { Component } from 'react';

export default class WeatherForm extends Component {
    render() {
        return (
            <div>
                <br />
                <input type="text" placeholder="Enter city name" />
                <br /><br />
                <button>Get Temp</button>
            </div>
        );
    }
}

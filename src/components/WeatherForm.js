import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTemp from '../api/getTemp';
import * as actionCreator from '../redux/actionCreator';

class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.onGetTemp = this.onGetTemp.bind(this);
    }

    onGetTemp() {
        this.props.timKiem();
        // this.props.timKiem();
        const cityName = this.refs.txtCityName.value;
        this.refs.txtCityName.value = '';
        getTemp(cityName)
        .then(temp => this.props.timKiemThanhCong(cityName, temp))
        .catch(() => {
            alert('Can not find city');// eslint-disable-line
            this.props.timKiemThatBai();
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

export default connect(null, actionCreator)(WeatherForm);

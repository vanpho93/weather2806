import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTemp from '../api/getTemp';

class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.onGetTemp = this.onGetTemp.bind(this);
    }

    onGetTemp() {
        this.props.dispatch({ type: 'TIM_KIEM' });
        const cityName = this.refs.txtCityName.value;
        this.refs.txtCityName.value = '';
        getTemp(cityName)
        .then(temp => { 
            const action = { type: 'TIM_KIEM_THANH_CONG', temp, cityName };
            this.props.dispatch(action);
        })
        .catch(() => {
            alert('Can not find city');// eslint-disable-line
            this.props.dispatch({ type: 'TIM_KIEM_THAT_BAI' });
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

export default connect()(WeatherForm);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Weather from './components/Weather';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Weather />
    </Provider>,
    document.getElementById('root') // eslint-disable-line
);

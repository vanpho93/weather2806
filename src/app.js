import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Box from './components/Box';

//state mac dinh
const defaultState = { value: 1 };
//reducer 
const reducer = (state = defaultState, action) => {
    if (action.type === 'UP') return { value: state.value + 1 };
    if (action.type === 'DOWN') return { value: state.value - 1 };
    return state;
};
//store
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Box />
    </Provider>,
    document.getElementById('root') // eslint-disable-line
);

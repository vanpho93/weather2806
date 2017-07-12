import { createStore, compose } from 'redux';

const defaultState = {
    isLoading: false,
    cityName: null,
    temp: null
};

const reducer = (state = defaultState, action) => {
    const { type, cityName, temp } = action;
    if (type === 'TIM_KIEM') return { isLoading: true, cityName: null, temp: null };
    if (type === 'TIM_KIEM_THAT_BAI') return { isLoading: false, cityName: null, temp: null };
    if (type === 'TIM_KIEM_THANH_CONG') return { isLoading: false, cityName, temp };
    return state;
};

//store
const toCompose = window.devToolsExtension ? window.devToolsExtension() : f => f; // eslint-disable-line
const store = createStore(reducer, compose(toCompose));
export default store;

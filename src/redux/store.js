import { createStore } from 'redux';
//state mac dinh
const defaultState = {
    isLoading: false,
    cityName: null,
    temp: null
};
//action
/*
    1. TIM_KIEM
    2. TIM_KIEM_THANH_CONG - { type: xxxxx, cityName, temp }
    3. TIM_KIEM_THAT_BAI
*/
//reducer 

const reducer = (state = defaultState, action) => {
    if (action.type === 'TIM_KIEM') return { isLoading: true, cityName: null, temp: null };
    if (action.type === 'TIM_KIEM_THAT_BAI') return { isLoading: false, cityName: null, temp: null };
    if (action.type === 'TIM_KIEM_THANH_CONG') return { isLoading: false, cityName: action.cityName, temp: action.temp };
    return state;
};

//store
const store = createStore(reducer);
export default store;

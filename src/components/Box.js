import { createStore } from 'redux';
//state mac dinh
const defaultState = { value: 0 };
//reducer 
const reducer = (state = defaultState, action) => {
    if (action.type === 'UP') return { value: state.value + 1 };
    if (action.type === 'DOWN') return { value: state.value - 1 };
    return state;
};
//store
const store = createStore(reducer);
console.log(store.getState());

store.dispatch({ type: 'UP' });
console.log(store.getState());

store.dispatch({ type: 'DOWN' });
console.log(store.getState());

/*
    state -> trang thai cua ung dung -> object

    action -> chi thi { type: ..., [...] }

    reducer -> pure function state + action -> state moi

    store -> doi tuong quan ly state. store = createStore(reducer);
*/
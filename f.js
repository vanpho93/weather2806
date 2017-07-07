//Khong co side effect

const state = { value: 0 };

function getNewState(oldState) {
    return { value: oldState.value + 1 };
}

const newState = getNewState(state);

console.log(state);
console.log(newState);

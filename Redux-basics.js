const redux = require('redux');
const createStore = redux.createStore;

//Initial state
const initialState = {
    counter: 0
}
//Reducer
const rootRedudcer = (state = initialState, action) => {
    if (action.type === 'INC') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// Store
const store = createStore(rootRedudcer);
// Subscription
store.subscribe(() => {
    console.log("Subscription", store.getState())
});

//Dispatch action
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'ADD', value: 10 });

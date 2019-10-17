import * as actionTypes from '../actions/actions';

const initialState = {
    result: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORERESULT:
            return {
                ...state,
                result: state.result.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELRESULT:
            const updatedArray = state.result.filter(item => item.id !== action.value);
            return {
                ...state,
                result: updatedArray
            }

        default:
            return state;
    }
};

export default reducer;
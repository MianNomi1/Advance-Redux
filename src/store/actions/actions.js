export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORERESULT = 'STORERESULT';
export const DELRESULT = 'DELRESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const deccrement = () => {
    return {
        type: DECREMENT
    }
}
export const add = (val) => {
    return {
        type: ADD,
        value: val
    }
}
export const subtract = (val) => {
    return {
        type: SUBTRACT,
        value: val
    }
}

export const saveResult = (res) => {
    return {
        type: STORERESULT,
        result: res
    }
}
export const storeResult = (res) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000)
    }
}
export const delResult = (id) => {
    return {
        type: DELRESULT,
        value: id
    }
}
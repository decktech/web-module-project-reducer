export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const UPDATE_MEMORY = "UPDATE_MEMORY";
export const APPLY_MEMORY = "APPLY_MEMORY"
export const ERASE_MEMORY = "ERASE_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const updateMemory = () => {
    return({type:UPDATE_MEMORY})
}

export const applyMemory = () => {
    return({type:APPLY_MEMORY})
}

export const eraseMemory = () => {
    return({type:ERASE_MEMORY})
}
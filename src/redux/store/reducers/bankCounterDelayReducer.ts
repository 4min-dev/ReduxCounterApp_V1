import { IBankCounterDelayReducerAction } from "../../../ts/interfaces/bankCounter/IBankCounterDelayReducerAction"

const defaultState = {delay:0, checkboxValue:false}

export const bankCounterDelayReducer = (state = defaultState,action:IBankCounterDelayReducerAction) => {
    switch(action.type) {
        case 'SET_COUNTER_DELAY': return {...state, delay:action.delay}
        case 'SET_COUNTER_DELAY_STATUS': return {...state, checkboxValue:action.checkboxValue}
        
        default: return state
    }
}
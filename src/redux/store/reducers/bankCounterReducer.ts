import { IBankCounterAction } from "../../../ts/interfaces/bankCounter/IBankCounterAction"

const defaultState = {cash:0}
export const bankCounterReducer = (state = defaultState,action:IBankCounterAction) => {
    switch(action.type) {
        case 'ADD_CASH': return {...state, cash: state.cash += action.payload}
        case 'GET_CASH': return state.cash <= 0 ? {...state, cash:0} : {...state, cash: state.cash -= action.payload}

        default: return state
    }
}
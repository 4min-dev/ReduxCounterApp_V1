import { IUser } from "../../../ts/interfaces/users/IUser"
import { IUsersAction } from "../../../ts/interfaces/users/IUsersAction"

const defaultState = {users:[],isLoading:null}

export const userReducer = (state = defaultState,action:IUsersAction) => {
    switch(action.type) {
        case 'USERS_LOADING': return {...state, isLoading:true}
        case 'USERS_LOADED': return {...state, isLoading:false}
        case 'ADD_USERS_SUCCESS': return {...state, users:[...state.users, ...action.usersload]}
        case 'ADD_USERS_ERROR': return {...state, error:'An error occurred while trying to load data'}
        case 'ADD_USER': return {...state, users:[...state.users, action.usersload]}
        case 'GET_USERS': return {...state, users:[]}
        case 'GET_USER': return {...state, users:[...state.users.filter((user:IUser) => user.id !== action.userload_id)]}

        default: return state
    }
}
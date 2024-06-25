import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { IUser } from "../../ts/interfaces/users/IUser";

const fetchToUsersApi = () => axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users').then(res => res.data)

function* getUsersFromBaseWorker():Generator {
    try {
        yield put({type:'USERS_LOADING'})
        const response = yield call(fetchToUsersApi)
        yield put({type:'ADD_USERS_SUCCESS',usersload:response})
    } catch(e) {
        yield put({type:'ADD_USERS_ERROR',error:e})
    } finally {
        yield put({type:'USERS_LOADED'})
    }
}

export function* usersSagaWatcher() {
    yield takeEvery('ADD_USERS_FROM_BASE',getUsersFromBaseWorker)
}
import { applyMiddleware, combineReducers, createStore } from "redux";
import { bankCounterReducer } from "./reducers/bankCounterReducer";
import { userReducer } from "./reducers/userReducer";
import { bankCounterDelayReducer } from "./reducers/bankCounterDelayReducer";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "../../redux-saga/saga";

const sagaMiddleware = createSagaMiddleware()

const cmReducers = combineReducers({
    bankReducer:bankCounterReducer,
    userReducer:userReducer,
    counterDelayReducer:bankCounterDelayReducer
})

export const globalStore = createStore(cmReducers,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
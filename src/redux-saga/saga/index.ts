import { all } from "redux-saga/effects";
import { counterSagaWatcher } from "./counterSaga";
import { usersSagaWatcher } from "./usersSaga";

export function* rootWatcher() {
    yield all([counterSagaWatcher(),usersSagaWatcher()])
}
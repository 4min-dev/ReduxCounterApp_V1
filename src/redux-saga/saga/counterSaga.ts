import { delay, put, select, takeEvery } from "redux-saga/effects";
import { IcounterDelayReducerState } from "../../ts/interfaces/bankCounter/IcounterDelayReducerState";
import { IBankState } from "../../ts/interfaces/bankCounter/IBankState";

function* getDelayValue() {
    const delay:number = yield select((state:IcounterDelayReducerState) => state.counterDelayReducer.delay)
    return delay
}

function* getCurrCash() {
    const currCash:number = yield select((state:IBankState) => state.bankReducer.cash)
    return currCash
}

function getWorkerPayload(promptTitle:string):number | null {
    let payload:number = Number(prompt(promptTitle))

    if(isNaN(payload)) {
        console.log('Not a number')
        return null
    }

    return payload
}

function* incrementSagaWorker() {
    const delayValue:number = yield getDelayValue()
    let payload:number = yield getWorkerPayload('+ value')

    if(payload > 0) {
        yield delay(delayValue)
        yield put({ type: 'ADD_CASH', payload: payload })
    } else {
        console.log('Increment value cannot be less 0')
        return
    }
}

function* decrementSagaWorker() {
    const delayValue:number = yield getDelayValue()
    const currCash:number = yield getCurrCash()
    let payload:number = yield getWorkerPayload('- value')

    if(payload !== null && payload >= currCash) {
        payload = currCash
    } else if(payload < 0) {
        console.log('Decrement value cannot be less 0')
        return
    }

    yield delay(delayValue)
    yield put({ type: 'GET_CASH', payload: payload })
}

export function* counterSagaWatcher() {
    yield takeEvery('ASYNC_COUNTER_INCR', incrementSagaWorker)
    yield takeEvery('ASYNC_COUNTER_DECR', decrementSagaWorker)
}
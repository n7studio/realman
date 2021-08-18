import { put, getContext } from 'redux-saga/effects'
import { SagaCallable } from "react-modx";
import { Types } from '../types'

export const fetchPlayers:SagaCallable = {
    type: Types.FETCH_PLAYERS,
    call: function* (action) {
        const apiClient = yield getContext("apiClient");
        yield put({type: Types.ADD_PLAYER, payload: "nama" })
    }
}

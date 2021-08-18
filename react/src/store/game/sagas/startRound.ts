import { put , getContext, apply } from 'redux-saga/effects';
import { SagaCallable } from "react-modx";
import { Types } from '../../types';

export const startRound:SagaCallable = {
    type: Types.START_ROUND,
    call: function* () {
        const realtimeClient: any = yield getContext("realtimeClient");
        yield apply(realtimeClient, "startRound", []);
        // yield put({ type: Types.CREATE_ROUND});
    }
}


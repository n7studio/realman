import { put , getContext, apply } from 'redux-saga/effects';
import { SagaCallable } from "react-modx";
import { Types } from '../../types';


export const stopRound:SagaCallable = {
    type: Types.STOP_ROUND,
    call: function* ({payload}) {
        const realtimeClient: any = yield getContext("realtimeClient");
        // const roundStatus: RoundStatuses = payload;
        // yield put({ type: Types.SET_CURRENT_ROUND_TO_STOPPED});
        yield apply(realtimeClient, "stopRound", []);
    }
}

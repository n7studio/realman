import { put , getContext, apply } from 'redux-saga/effects';
import { SagaCallable } from "react-modx";
import { Types } from '../../types'

export const chooseRandomLetter:SagaCallable = {
    type: Types.CHOOSE_RANDOM_LETTER,
    call: function* () {
        const realtimeClient: any = yield getContext("realtimeClient");
        yield apply(realtimeClient, "chooseRandomLetter", []);
    }
}


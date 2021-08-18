import { getContext, apply } from 'redux-saga/effects'
import { SagaCallable } from "react-modx";
import { Types } from '../types'
import { Player } from '../../types/models';

export const join: SagaCallable = {
    type: Types.JOIN,
    call: function* ({ payload }) {

        const realtimeClient: any = yield getContext("realtimeClient");
        const player: Player = payload;

        yield apply(realtimeClient, "join", [player]);
    }
}

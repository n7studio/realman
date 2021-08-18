import { put , getContext, apply } from 'redux-saga/effects';
import { SagaCallable } from "react-modx";
import { Types } from '../../types'
import {Letter} from "../../../types/models";

export const selectPlayableLetter:SagaCallable = {
    type: Types.SELECT_PLAYABLE_LETTER,
    call: function* ({payload}) {
        const realtimeClient: any = yield getContext("realtimeClient");

        const letter:Letter = payload;

        yield put({type: Types.ADD_PLAYABLE_LETTER, payload: letter });
        yield apply(realtimeClient, "selectPlayableLetter", [letter]);
    }
}
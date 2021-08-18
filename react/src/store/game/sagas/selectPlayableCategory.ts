import { put, getContext, apply } from 'redux-saga/effects';
import { SagaCallable } from "react-modx";
import { Category } from "../../../types/models";
import { Types } from '../../types'

export const selectPlayableCategory: SagaCallable = {
    type: Types.SELECT_PLAYABLE_CATEGORY,
    call: function* ({ payload }) {
        const realtimeClient: any = yield getContext("realtimeClient");

        const category: Category = payload;

        yield put({ type: Types.ADD_PLAYABLE_CATEGORY, payload: category });
        yield apply(realtimeClient, "selectPlayableCategory", [category]);
    }
}


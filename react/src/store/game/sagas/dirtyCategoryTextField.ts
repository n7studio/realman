import { put , getContext, apply } from 'redux-saga/effects';
import { SagaCallable } from "react-modx";
import { Types } from '../../types'



export const dirtyCategoryTextField:SagaCallable = {
    type: Types.DIRTY_CATEGORY_TEXT_FIELD,
    call: function* ({payload}) {
        const realtimeClient: any = yield getContext("realtimeClient");

        // const {category:Category , player:Player} = payload;

        yield put({type: Types.SET_CATEGORY_TEXT_FIELD_TO_DIRTY, payload });
        // yield apply(realtimeClient, "activeCategoryTextField", [category]);
    }
}
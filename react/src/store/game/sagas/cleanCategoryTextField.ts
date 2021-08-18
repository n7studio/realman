import { put , getContext, apply } from 'redux-saga/effects';
import { SagaCallable } from "react-modx";
import { Types } from '../../types'
import { Category } from '../../../types/models';
import { Player } from '../../../modules/players/types/models';

interface Params {
    payload: { 
        category: Category, 
        currentPlayer: Player 
    }
}

export const cleanCategoryTextField:SagaCallable = {
    type: Types.CLEAN_CATEGORY_TEXT_FIELD,
    call: function* ({payload}:Params) {
        const realtimeClient: any = yield getContext("realtimeClient");

        // const {category:Category , player:Player} = payload;

        yield put({type: Types.SET_CATEGORY_TEXT_FIELD_TO_CLEAN, payload });
        // yield apply(realtimeClient, "activeCategoryTextField", [category]);
    }
}
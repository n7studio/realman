import { put, getContext, call } from 'redux-saga/effects'
import { SagaCallable } from "react-modx"
import { Types } from '../../types'

export const fetchCategories:SagaCallable = {
    type: Types.FETCH_CATEGORIES,
    call: function* () {
        const apiClient:any = yield getContext("apiClient");
        const categories = yield call([apiClient, "getCategories"])
        yield put({type: Types.ADD_MULTIPLE_CATEGORIES, payload: categories })
    }
}
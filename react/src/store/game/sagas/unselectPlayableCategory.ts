import { put, getContext, apply } from "redux-saga/effects";
import { SagaCallable } from "react-modx";
import { Category } from "../../../types/models";
import { Types } from "../../types";

export const unselectPlayableCategory: SagaCallable = {
  type: Types.UNSELECT_PLAYABLE_CATEGORY,
  call: function* ({ payload }) {
    const realtimeClient: any = yield getContext("realtimeClient");

    const category: Category = payload;

    yield apply(realtimeClient, "unselectPlayableCategory", [category]);
    yield put({ type: Types.REMOVE_PLAYABLE_CATEGORY, payload: category });
  }
};

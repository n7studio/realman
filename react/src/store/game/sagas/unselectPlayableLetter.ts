import { put, getContext, apply } from "redux-saga/effects";
import { SagaCallable } from "react-modx";
import { Types } from "../../types";
import {Letter} from "../../../types/models";

export const unselectPlayableLetter: SagaCallable = {
    type: Types.UNSELECT_PLAYABLE_LETTER,
    call: function* ({ payload }) {
        const realtimeClient: any = yield getContext("realtimeClient");

        const letter: Letter = payload;

        yield apply(realtimeClient, "unselectPlayableLetter", [letter]);
        yield put({ type: Types.REMOVE_PLAYABLE_LETTER, payload: letter });
    }
};

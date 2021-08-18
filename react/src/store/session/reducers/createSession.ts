import {ReducerCallable} from "react-modx";
import { SessionsState } from "../../../types/state";
import {Types} from "../../types";

export const createSession:ReducerCallable = {
    type: Types.CREATE_SESSION,
    call: (currentState: SessionsState, player: string) => {
        return {
            ...currentState,
            player
        };
    }
}
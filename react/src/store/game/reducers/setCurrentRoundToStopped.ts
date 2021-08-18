import {ReducerCallable} from "react-modx";
import {Types} from "../../types";
import {last} from "lodash";
import {RoundStatuses} from "../../../enums/RoundStatuses";
import { Round } from "../../../types/models";
import { GameState } from "../../../types/state";


export const setCurrentRoundToStopped: ReducerCallable = {
    type: Types.SET_CURRENT_ROUND_TO_STOPPED,
    call: (
        currentState: GameState,
    ) => {
        const rounds = [...currentState.rounds];
        const round = last<Round>(rounds);

        round!.status = RoundStatuses.STOPPED;

        return {
            ...currentState,
            rounds
        };
    }
};
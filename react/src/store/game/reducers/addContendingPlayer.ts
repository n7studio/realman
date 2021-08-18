import {ReducerCallable} from "react-modx";
import {Player} from "../../../modules/players/types/models";
import { GameState } from "../../../types/state";
import {Types} from "../../types";

export const addContendingPlayer:ReducerCallable = {
    type: Types.ADD_CONTENDING_PLAYER,
    call: (currentState: GameState, player: Player) => {
        const contendingPlayers = [...currentState.contendingPlayers, player];
        return {
            ...currentState,
            contendingPlayers
        };
    }
}


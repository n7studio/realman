import { ReducerCallable } from "react-modx";
import { Types } from '../types'
import {PlayersStateInterface} from "../../../../types/PlayersStateInterface";
import {Player} from "../../types/models";

export const removePlayer:ReducerCallable = {
    type: Types.REMOVE_PLAYER,
    call: (currentState: PlayersStateInterface, removedPlayer: Player) => {

        let byId: { [key: string]: Player } = { ...currentState.players.byId };
        delete byId[removedPlayer.name];
        
        return {
            ...currentState,
            players: {
                byId
            }
        };
    }
}


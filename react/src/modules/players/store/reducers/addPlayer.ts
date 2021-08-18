import { ReducerCallable } from "react-modx";
import { Types } from '../types'
import {PlayersStateInterface} from "../../../../types/PlayersStateInterface";
import {Player} from "../../types/models";

export const addPlayer:ReducerCallable = {
    type: Types.ADD_PLAYER,
    call: (currentState: PlayersStateInterface, player: Player) => {

        let byId: { [key: string]: Player } = { ...currentState.players.byId };
        byId[player.name] = player;
 
        return {
            ...currentState,
            players: {
                byId
            }
        };
    }
}


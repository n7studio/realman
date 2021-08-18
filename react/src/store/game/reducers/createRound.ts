import { ReducerCallable } from "react-modx";
import { Types } from "../../types";
import { GameState } from "../../../types/state";
import { Round } from "../../../types/models";
import { RoundStatuses } from "../../../enums/RoundStatuses";

export const createRound: ReducerCallable = {
    type: Types.CREATE_ROUND,
    call: (
        currentState: GameState
    ) => {

        const round: Round = {
            letter: null,
            status: RoundStatuses.IN_PROGRESS,
            categories: {}
        };

        currentState.playableCategories.forEach((categoryId:string)=>{
            currentState.contendingPlayers.forEach((playerId:string)=>{

                if(!round.categories[categoryId]){
                    round.categories[categoryId] = {}
                }
                if(!round.categories[categoryId][playerId]){
                    round.categories[categoryId][playerId] = {
                        isActive: false,
                        value: "",
                        isDirty: false,
                        vote:{}
                    };
                }
            })
        });

        const rounds = [...currentState.rounds];
        rounds.push(round);

        return {
            ...currentState,
            rounds,
        };
    },
};

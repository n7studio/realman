import { ReducerCallable } from "react-modx";
import { Types } from "../../types";
import { Letter } from "../../../types/models";
import { GameState } from "../../../types/state";
import { last } from "lodash";

export const addRandomLetter: ReducerCallable = {
    type: Types.ADD_RANDOM_LETTER,
    call: (
        currentState: GameState,
        randomLetter: Letter
    ) => {

        const rounds = [...currentState.rounds];
        const currentRound = last(rounds);

        if(currentRound){
            currentRound.letter = randomLetter.id
        }

        return {
            ...currentState,
            rounds
        };
    },
};

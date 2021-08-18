import { ReducerCallable } from "react-modx";
import { Types } from "../../types";
import { Letter } from "../../../types/models";
import { GameState } from "../../../types/state";

export const addPlayableLetter: ReducerCallable = {
    type: Types.ADD_PLAYABLE_LETTER,
    call: (
        currentState: GameState,
        playableLetter: Letter
    ) => {
        const playableLetters = [...currentState.playableLetters, playableLetter.id];

        return {
            ...currentState,
            playableLetters,
        };
    },
};

import { ReducerCallable } from "react-modx";
import { Types } from "../../types";
import { Letter } from "../../../types/models";
import { GameState } from "../../../types/state";

export const removePlayableLetter: ReducerCallable = {
    type: Types.REMOVE_PLAYABLE_LETTER,
    call: (
        currentState: GameState,
        playableLetter: Letter
    ) => {

        const playableLetters: Array<string> = [...currentState.playableLetters]
        const toDeleteIndex = playableLetters.indexOf(playableLetter.id);
        playableLetters.splice(toDeleteIndex, 1);

        return {
            ...currentState,
            playableLetters
        };
    },
};

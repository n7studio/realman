import {Letter} from "../../../../types/models";
import {addPlayableLetter} from "../../../../store/game/reducers";
import {GameState} from "../../../../types/state";

describe('add Playable Letter', () => {

    it('should add letter', () => {

        const initialState: GameState = {
            playableCategories: [],
            playableLetters: [
                "A"
            ],
            rounds: [],
            contendingPlayers: []
        };

        const letter: Letter = {value: "C", id: "C"};


        const newState: any = addPlayableLetter.call(initialState, letter);
        expect(newState.playableLetters.length).toEqual(2);
        expect(newState).toStrictEqual({
            playableCategories: [],
            playableLetters: [...initialState.playableLetters, letter.id],
        })
    });
});

import {Category} from "../../../../types/models";
import {addPlayableCategory} from "../../../../store/game/reducers";
import {GameState} from "../../../../types/state";

describe('add Playable Category', () => {

    it('should add category', () => {

        const initialState: GameState = {
            playableCategories: [
                "Pays"
            ],
            playableLetters: [], rounds: [], contendingPlayers: []
        };

        const category: Category = {id: "Ville", name: "ville"};


        const newState: any = addPlayableCategory.call(initialState, category);
        expect(newState.playableCategories.length).toEqual(2);
        expect(newState).toStrictEqual({
            playableCategories: [...initialState.playableCategories, category.id],
            playableLetters: [],
        })
    });
});

import {Category} from "../../../../types/models";
import {
    setCategoryTextFieldToActive
} from "../../../../store/game/reducers";
import {GameState} from "../../../../types/state";


describe('set Category CategoryTextField To Active', () => {

    it('should set category textField to active', () => {

        const initialState: GameState = {
            playableCategories: [

            ],
            playableLetters: [],
            rounds: [
                {
                    letter: "",
                    categories:{
                        "boyName":{
                            "Kevin":{
                                isActive: false,
                                value:"",
                                vote:{},
                                isDirty:false
                            }
                        }
                    }
                }
            ],
            contendingPlayers: []
        };

        const category:Category = {
                id: "boyName",
                name: "BoyName"
        }

        const currentPlayer:string = "Kevin"

        let params = {category,
            currentPlayer}

        const newState: any = setCategoryTextFieldToActive.call(initialState, params);
        expect(newState.rounds[0].categories["boyName"]["Kevin"].isActive).toEqual(true);
        expect(newState).toStrictEqual({
            playableCategories:[],
            playableLetters: [],
            rounds: [ {
                categories: {
                    "boyName": {
                        "Kevin": {
                            isActive: true,
                            isDirty: false,
                            value: "",
                            vote:{},
                        },
                    },
                },
                letter: "",
            }, ],
            contendingPlayers:[]
    })
    });
});

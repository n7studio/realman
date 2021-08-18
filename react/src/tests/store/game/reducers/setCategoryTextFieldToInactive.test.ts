import {Category} from "../../../../types/models";
import {
     setCategoryTextFieldToInactive
} from "../../../../store/game/reducers";
import {GameState} from "../../../../types/state";


describe('set Category CategoryTextField To Inactive', () => {

    it('should set category textField to inactive', () => {

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
                                isActive: true,
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

        const newState: any = setCategoryTextFieldToInactive.call(initialState, params);
        expect(newState.rounds[0].categories["boyName"]["Kevin"].isActive).toEqual(false);
        expect(newState).toStrictEqual({
            playableCategories:[],
            playableLetters: [],
            rounds: [ {
                categories: {
                    "boyName": {
                        "Kevin": {
                            isActive: false,
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

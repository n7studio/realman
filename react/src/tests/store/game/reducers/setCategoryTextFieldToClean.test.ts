import {Category} from "../../../../types/models";
import {
    setCategoryTextFieldToClean,
    setCategoryTextFieldToInactive
} from "../../../../store/game/reducers";
import {GameState} from "../../../../types/state";


describe('set Category CategoryTextField To Clean', () => {

    it('should set category textField to clean', () => {

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
                                isDirty:true
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

        const newState: any = setCategoryTextFieldToClean.call(initialState, params);
        expect(newState.rounds[0].categories["boyName"]["Kevin"].isDirty).toEqual(false);
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
            joinedPlayers:[]
    })
    });
});

import {Category} from "../../../../types/models";
import {
    setCategoryTextFieldValue,
    setCategoryTextFieldToClean,
    setCategoryTextFieldToInactive
} from "../../../../store/game/reducers";
import {GameState} from "../../../../types/state";


describe('set Category CategoryTextField Value', () => {

    it('should set category textField value', () => {

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

        const value:string = "BlaBla"

        let params = {category,
            currentPlayer, value}

        const newState: any = setCategoryTextFieldValue.call(initialState, params);
        expect(newState.rounds[0].categories["boyName"]["Kevin"].value).toEqual("BlaBla");
        expect(newState).toStrictEqual({
            playableCategories:[],
            playableLetters: [],
            rounds: [ {
                categories: {
                    "boyName": {
                        "Kevin": {
                            isActive: false,
                            isDirty: false,
                            value: "BlaBla",
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

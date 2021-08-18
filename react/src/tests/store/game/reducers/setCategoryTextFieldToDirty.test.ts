import {Category} from "../../../../types/models";
import {
    setCategoryTextFieldToActive, setCategoryTextFieldToDirty
} from "../../../../store/game/reducers";
import {GameState} from "../../../../types/state";


describe('set Category CategoryTextField To Dirty', () => {

    it('should set category textField to dirty', () => {

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

        const newState: any = setCategoryTextFieldToDirty.call(initialState, params);
        expect(newState.rounds[0].categories["boyName"]["Kevin"].isDirty).toEqual(true);
        expect(newState).toStrictEqual({
            playableCategories:[],
            playableLetters: [],
            rounds: [ {
                categories: {
                    "boyName": {
                        "Kevin": {
                            isActive: false,
                            isDirty: true,
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

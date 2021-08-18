import {ReducerCallable} from "react-modx";
import {Types} from "../../types";
import { GameState } from "../../../types/state";
import {Category} from "../../../types/models";
import {last} from "lodash";
import {Round} from "../../../types/models/Round";
import { Player } from "../../../modules/players/types/models";



export const setCategoryTextFieldValue: ReducerCallable = {
    type: Types.SET_CATEGORY_TEXT_FIELD_VALUE,
    call: (
        currentState: GameState,
        params : {category:Category,
            currentPlayer:Player, value:string}
    ) => {
        const rounds = [...currentState.rounds];
        const round = last<Round>(rounds);

        const {category , currentPlayer, value} = params


        round!.categories[category.id][currentPlayer.name].value = value;

        return {
            ...currentState,
            rounds
        };
    }
};
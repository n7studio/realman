import {ReducerCallable} from "react-modx";
import {Types} from "../../types";
import { GameState } from "../../../types/state";
import { Category } from "../../../types/models";
import {last} from "lodash";
import {Round} from "../../../types/models";
import {Player} from "../../../modules/players/types/models";

export const setCategoryTextFieldToInactive: ReducerCallable = {
    type: Types.SET_CATEGORY_TEXT_FIELD_TO_INACTIVE,
    call: (
        currentState: GameState,
        params : {
            category:Category,
            currentPlayer:Player
        }
    ) => {
        const rounds = [...currentState.rounds];
        const round = last<Round>(rounds);

        const {category , currentPlayer} = params

        round!.categories[category.id][currentPlayer.name].isActive = false;

        return {
            ...currentState,
            rounds
        };
    }
};
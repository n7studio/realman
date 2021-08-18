import { getLetters } from "../helpers/getLetters";
import { Letter } from "../types/models";
import * as sagas from "../store/entities/sagas";
import * as reducers from "../store/entities/reducers";
import * as playersSagas from "../modules/players/store/sagas";
import * as playersReducers from "../modules/players/store/reducers";
import { EntitiesState } from "../types/state/EntitiesState";
import { useModularState } from "./useModularState";

export function useEntities() {

    let lettersById: { [key: string]: Letter } = {};
    getLetters().map((letter: Letter) => {
        lettersById[letter.id] = letter;
    });

    const initialState: EntitiesState = {
        letters: {
            byId: { ...lettersById },
        },
        categories: {
            byId: {}
        },
        players: {
            byId: {}
        }
    };

    const [entities, actions] = useModularState("entities", initialState, {
        reducers: {
            ...reducers,
            ...playersReducers
        },
        sagas: {
            ...sagas,
            ...playersSagas
        },
    });

    return { entities, actions };
}
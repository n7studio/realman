import { GameState } from "../types/state";
import { useModularState } from "./useModularState";
import * as sagas from "../store/game/sagas";
import * as reducers from "../store/game/reducers";

export function useGame() {

    const initialState: GameState = {
        playableLetters: [],
        playableCategories: [],
        contendingPlayers:[],
        rounds: []
    };

    const [game, actions] = useModularState("game", initialState, {
        reducers: { ...reducers },
        sagas: { ...sagas },
    });

    return { game, actions };
}
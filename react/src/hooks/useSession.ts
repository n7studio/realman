import {useModularState} from "./useModularState";
import * as reducers from "../store/session/reducers";
import { SessionsState } from "../types/state";

export function useSession() {
    const initialState: SessionsState = {
        player:""
    };

    const [session, actions] = useModularState("session", initialState, {
        reducers: { ...reducers },
        sagas: {},
    });

    return { session, actions };
}
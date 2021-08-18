import { last } from "lodash";
import { Round } from "../types/models";
import { useGame } from "./useGame";

export function useCurrentRound() {
    const { game } = useGame();
    const round = last<Round | undefined>(game.rounds);

    const letter = round && round.letter ? round.letter : "?";
    const categories = round && round.categories ? round.categories : null;

    const status = round && round.status ? round.status : undefined;


    return { letter , categories, round, status }
}
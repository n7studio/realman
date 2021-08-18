import { useEntities } from "./useEntities";
import { useGame } from "./useGame";

export function usePlayableLetters() {
    const { entities: { letters } } = useEntities();
    const { game: { playableLetters } } = useGame();

    return playableLetters.map((playableLetter: string) => letters.byId[playableLetter]);
}
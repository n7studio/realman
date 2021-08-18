import { useEntities } from "./useEntities";
import { useGame } from "./useGame";

export function usePlayableCategories() {
    const { entities } = useEntities();
    const { game: { playableCategories } } = useGame();

    const categories = playableCategories.map((playableCategory: string) => entities.categories.byId[playableCategory]);

    return { categories, ids: playableCategories };
}
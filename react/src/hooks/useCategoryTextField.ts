import {Category} from "../types/models";
import { Player } from "../modules/players/types/models";
import {useCurrentRound} from "./useCurrentRound";

export function useCategoryTextField(category:Category, currentPlayer:Player) {
    const {categories,round} = useCurrentRound();

    const isActive = categories![category.id][currentPlayer.name].isActive;
    const isDirty = categories![category.id][currentPlayer.name].isDirty;


    return { isActive, isDirty };
}
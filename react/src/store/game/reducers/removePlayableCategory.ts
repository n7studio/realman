import { ReducerCallable } from "react-modx";
import { Types } from "../../types";
import { Category } from "../../../types/models";
import { GameState } from "../../../types/state";


export const removePlayableCategory: ReducerCallable = {
  type: Types.REMOVE_PLAYABLE_CATEGORY,
  call: (
    currentState: GameState,
    playableCategory: Category
  ) => {

    const playableCategories: Array<string> = [...currentState.playableCategories]
    const toDeleteIndex = playableCategories.indexOf(playableCategory.id);
    playableCategories.splice(toDeleteIndex, 1);

    return {
      ...currentState,
      playableCategories
    };
  },
};

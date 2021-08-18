import { ReducerCallable } from "react-modx";
import { Types } from "../../types";
import { Category } from "../../../types/models";
import { GameState } from "../../../types/state";

export const addPlayableCategory: ReducerCallable = {
  type: Types.ADD_PLAYABLE_CATEGORY,
  call: (
    currentState: GameState,
    playableCategory: Category
  ) => {
    const playableCategories = [...currentState.playableCategories, playableCategory.id];

    return {
      ...currentState,
      playableCategories
    };
  },
};

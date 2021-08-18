import { ReducerCallable } from "react-modx";
import { Types } from '../../types'
import { Category } from "../../../types/models";
import { EntitiesState } from "../../../types/state";

export const addMultipleCategories: ReducerCallable = {
    type: Types.ADD_MULTIPLE_CATEGORIES,
    call: (currentState: EntitiesState, multipleCategories: Array<Category>) => {

        let byId: { [key: string]: Category } = { ...currentState.categories.byId };
        multipleCategories.map((category: Category) => {
            byId[category.id] = category;
        });

        return {
            ...currentState,
            categories: {
                byId
            }
        };
    }
}

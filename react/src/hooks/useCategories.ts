import { Category } from "../types/models";
import { useEntities } from "./useEntities";

export function useCategories() {

  const { entities: { categories: { byId } } } = useEntities();

  const categories: Array<Category> = [];
  Object.keys(byId).map(key => {
    categories.push(byId[key]);
  })

  return categories;
}
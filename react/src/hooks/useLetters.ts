import { Letter } from "../types/models";
import { useEntities } from "./useEntities";

export function useLetters() {

    const { entities: { letters: { byId } } } = useEntities();

    const letters: Array<Letter> = [];
    Object.keys(byId).map(key => {
      letters.push(byId[key]);
    })
  
    return letters;
}
import { Category, Letter } from "../models";
import { Player } from "../../modules/players/types/models";
import { PlayersStateInterface } from "../PlayersStateInterface";

export interface EntitiesState extends PlayersStateInterface  {
    letters: {
        byId: {[key:string]:Letter}
    }
    categories: {
        byId: {[key:string]:Category}
    }
}
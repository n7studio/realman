import { Player } from "../modules/players/types/models";


export interface PlayersStateInterface {
    players: {
        byId: { [key: string]: Player }
    }
}
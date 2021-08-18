import { Round } from "../models/Round";

export interface GameState {
    playableLetters: Array<string>,
    playableCategories: Array<string>,
    contendingPlayers:Array<string>,
    rounds: Array<Round>
}
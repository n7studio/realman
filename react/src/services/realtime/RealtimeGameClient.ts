import { Category } from '../../types/models';
import { RealtimeConnectionInterface } from '../../modules/realtime/types/RealtimeConnectionInterface';
import { Player } from "../../modules/players/types/models";
import { Letter } from '../../types/models';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';
import {RoundStatuses} from "../../enums/RoundStatuses";

export class RealtimeGameClient {

    conn: RealtimeConnectionInterface;

    constructor(conn: RealtimeConnectionInterface) {
        this.conn = conn;
    }

    join(player: Player) {
        this.conn.send('join', player.name);
    }

    selectPlayableCategory(category: Category) {
        this.conn.send('selectPlayableCategory', category.id);
    }



    unselectPlayableCategory(category: Category){
        this.conn.send('unselectPlayableCategory', category);
    }

    selectPlayableLetter(letter: Letter) {
        this.conn.send('selectPlayableLetter', letter);
    }

    unselectPlayableLetter(letter: Letter) {
        this.conn.send('unselectPlayableLetter', letter);
    }

    startRound(){
        this.conn.send('startRound');
    }

    stopRound(){
        this.conn.send('stopRound');
    }

    onRoundStarted(callback:Function){
        this.conn.on('roundStarted',()=>{
            callback();
        });
    }
    onRoundStopped(callback:Function){
        this.conn.on('roundStopped',()=>{
            callback();
        });
    }

    chooseRandomLetter(){
        this.conn.send('chooseRandomLetter');
    }
    
    onPlayableCategorySelected(callback: Function) {
        this.conn.on('playableCategorySelected', (playableCategories: Array<string>) => {
            callback(playableCategories);
        });
    }

    onPlayerJoined(callback: Function) {
        this.conn.on('playerJoined', (connectedPlayers: Array<string>) => {
            const players = connectedPlayers.map(connectedPlayer => {
                const player:Player = {
                    name: connectedPlayer
                }
                return player;
            });
            callback(players);
        });
    }

    onPlayerLeft(callback: Function) {
        this.conn.on('playerLeft', (connectedPlayers: Array<string>) => {
            const players = connectedPlayers.map(connectedPlayer => {
                const player:Player = {
                    name: connectedPlayer
                }
                return player;
            });
            
            callback(players);
        });
    }

    onPlayableLetterSelected(callback: Function) {
        this.conn.on('letterSelected', (chosenLetter: Letter) => {
            callback(chosenLetter);
        });
    }

    onRandomLetterChosen(callback: Function){
        this.conn.on('randomLetterChosen', (randomLetter: any) => {
            callback(randomLetter);
        });
    }
}
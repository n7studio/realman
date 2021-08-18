import { Category, Letter } from '../../types/models';
import { RealtimeConnectionInterface } from '../../modules/realtime/types/RealtimeConnectionInterface';
import { Player } from "../../modules/players/types/models";
import { isString, random } from 'lodash';
import { getLetters } from '../../helpers/getLetters';

/** @private */
enum ConnectionState {
    Connecting = "Connecting",
    Connected = "Connected",
    Disconnected = "Disconnected",
    Disconnecting = "Disconnecting",
}

export class DummyConnection implements RealtimeConnectionInterface {

    private connectionState: string;
    private listeners: { [key: string]: Function } = {};

    constructor() {
        this.buildListeners();
        this.connectionState = ConnectionState.Disconnected;
    }

    on(methodName: string, callback: (...args: any[]) => void): void {
        this.listeners[methodName](callback);
    }

    send(methodName: string, ...args: any[]): Promise<void> {
        if (this.connectionState !== ConnectionState.Connected) {
            return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
        }

        if (methodName === "chooseRandomLetter") {

            const letterStateJson = localStorage.getItem('letters');

            if (isString(letterStateJson)) {
                const lettersState: any = JSON.parse(letterStateJson);
                const letterPlayableIds = lettersState.playableIds;
                const randomIndex = random(0, letterPlayableIds.length - 1);
                const randomLetterId = letterPlayableIds[randomIndex];

                const randomLetter = getLetters().find(letter => letter.id === randomLetterId);

                // setTimeout(() => {
                    this.listeners['randomLetterChosen'](randomLetter);
                // }, 3000);
            }

        } else if (methodName === 'selectPlayableLetter') {
            const defaultState = JSON.stringify({
                playableIds: []
            });

            const letter: Letter = args[0];
            const lettersState: any = JSON.parse(localStorage.getItem('letters') || defaultState);

            lettersState.playableIds.push(letter.id);
            localStorage.setItem('letters', JSON.stringify(lettersState))
        }

        return Promise.resolve();
    }

    start(): Promise<void> {
        this.connectionState = ConnectionState.Connected;

        return Promise.resolve();
    }

    buildListeners() {
        this.listeners["categorySelected"] = (callback: (...args: any[]) => void) => {
            setTimeout(() => {
                const category: Category = {
                    name: "Firstname",
                    id: "firstname"
                }
                callback(category);
            }, 8000);
        }

        this.listeners["playerJoined"] = (callback: (...args: any[]) => void) => {
            setTimeout((player: Player) => {
                callback("Kevin");
                callback("Laurent");
            }, 1000);
        };

        this.listeners["letterSelected"] = (callback: (...args: any[]) => void) => {
            setTimeout(() => {
                const letter: Letter = {
                    value: "A",
                    id: 'A'
                }
                callback(letter);
            }, 2000);
        }

        this.listeners["randomLetterChosen"] = (callback: (...args: any[]) => void) => {
            this.listeners["randomLetterChosen"] = (randomLetter: Letter) => {
                callback(randomLetter);
            }
        }
    }
}
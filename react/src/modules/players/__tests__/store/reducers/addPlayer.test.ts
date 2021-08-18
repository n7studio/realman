import {PlayersStateInterface} from "../../../../../types/PlayersStateInterface";
import {Player} from "../../../types/models";
import {addPlayer} from "../../../store/reducers";


describe('add Player', () => {

    it('should add player', () => {

        const initialState: PlayersStateInterface = {
            all: [
                {
                    name: "Kevin"
                },
                {
                    name: "Laurent"
                },
            ],
            playing: []
        };

        const player: Player = {name: "Clerenjack"};


        const newState: any = addPlayer.call(initialState, player);
        expect(newState.all.length).toEqual(3);
        expect(newState).toStrictEqual({
            all: [
                ...initialState.all,
                player
            ],
            playing:[]
        })
    });
});
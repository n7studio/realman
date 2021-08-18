

import { Category } from "../../../../types/models";
import { runSaga } from 'redux-saga';
import { RealtimeGameClient } from '../../../../services/realtime/RealtimeGameClient';
import {activateCategoryTextField, selectPlayableCategory} from "../../../../store/game/sagas";



describe('Test active category textField saga', () => {

    it('active category textField', async () => {


        // const dispatched = [];
        // const category: Category = {
        //     id: "boyName",
        //     name: "BoyName"
        // };
        //
        // const currentPlayer:string = "Kevin";
        //
        // const params = {category,currentPlayer};
        //
        // await runSaga({
        //     dispatch: (action) => dispatched.push(action),
        // }, activateCategoryTextField.call, { payload: params }).toPromise();
        //
        // expect().toEqual();
        // expect().toEqual('');
    });
})
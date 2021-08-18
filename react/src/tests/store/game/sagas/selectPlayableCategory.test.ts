import { Category } from "../../../../types/models";
import { runSaga } from 'redux-saga';
import { RealtimeGameClient } from '../../../../services/realtime/RealtimeGameClient';
import {selectPlayableCategory} from "../../../../store/game/sagas";



describe('Test select playable category saga including realtime call', () => {

    it('Select playable category and send it over realtime', async () => {
        let testCategory: any;
        let testMethodName: any;

        const realtimeConnection: any = {
            send: (methodName: string, category: Category) => {
                testCategory = category;
                testMethodName = methodName;
            }
        };

        const realtimeClient: RealtimeGameClient = new RealtimeGameClient(realtimeConnection);

        const dispatched = [];
        const category: Category = {
            id: "firstname",
            name: "Firstname"
        };

        await runSaga({
            dispatch: (action) => dispatched.push(action),
            context: { realtimeClient }
        }, selectPlayableCategory.call, { payload: category }).toPromise();

        expect(testCategory).toEqual(category);
        expect(testMethodName).toEqual('selectPlayableCategory');
    });
})
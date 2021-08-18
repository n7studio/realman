import { RealtimeGameClient } from '../../../services/realtime/RealtimeGameClient';
import { RealtimeConnectionInterface } from '../../../modules/realtime/types/RealtimeConnectionInterface';
import { Category } from "../../../types/models";

test('listen if a category was chosen by the game admin', () => {

    let testCategoryName: any;
    let testMethodName: any;
    const realtimeConnection: any = {
        on: (methodName: string, callback: Function) => {
            testMethodName = methodName;
            const chosenCategory: Category = {
                id: "firstname",
                name: "Firstname"
            };

            callback(chosenCategory);
        }
    };

    const realtimeClient = new RealtimeGameClient(realtimeConnection);
    realtimeClient.onPlayableCategorySelected((category: Category) => {
        testCategoryName = category.name;
    });

    expect(testMethodName).toBe('playableCategorySelected');
    expect(testCategoryName).toBe('Firstname');
});

test('notify that a category was chosen by game admin', () => {

    let testMethodName: any;
    let testChosenCategory: any;

    const realtimeConnection: any = {
        send: (methodName: string, chosenCategory: Category) => {
            testMethodName = methodName;
            testChosenCategory = chosenCategory;

            return new Promise(() => { })
        }
    };

    const chosenCategory: Category = {
        id: "firstname",
        name: "Firstname"
    };

    const realtimeClient = new RealtimeGameClient(realtimeConnection);
    realtimeClient.selectPlayableCategory(chosenCategory);

    expect(testMethodName).toBe('selectPlayableCategory');
    expect(testChosenCategory.name).toBe('Firstname');
});

test('choose random letter', () => {

    let testMethodName: any = null;
    const realtimeConnection: any = {
        send: (methodName: string) => {
            testMethodName = methodName;
            return new Promise(() => { })
        }
    };

    const realtimeClient = new RealtimeGameClient(realtimeConnection);
    realtimeClient.chooseRandomLetter();

    expect(testMethodName).toBe('chooseRandomLetter');
});
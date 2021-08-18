import {Category} from "../../../../types/models";
import {RealtimeGameClient} from "../../../../services/realtime/RealtimeGameClient";
import {runSaga} from "redux-saga";
import {unselectPlayableCategory} from "../../../../store/game/sagas";


describe("Test unselect playable category saga including realtime call", () => {
  it("Unselect playable category and send it over realtime", async () => {
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
      id: "actor",
      name:"Actor"
    };

    await runSaga({
      dispatch: (action) => dispatched.push(action),
      context: { realtimeClient }
    }, unselectPlayableCategory.call, { payload: category }).toPromise();

    expect(testCategory).toEqual(category);
    expect(testMethodName).toEqual('unselectPlayableCategory');
  });
});

import { RealtimeConnectionFactory } from '../../../services/realtime/RealtimeConnectionFactory';
import { RealtimeProviders } from '../../../enums/RealtimeProviders';

test('create connection', () => {
    const factory = new RealtimeConnectionFactory("http://whatever.realtime.app");
    const conn = factory.create(RealtimeProviders.Dummy);

    expect(conn).toHaveProperty("on");
    expect(conn).toHaveProperty("send");
});


// test('expects error if creating a unkown provider', () => {
//     const factory = new RealtimeConnectionFactory("http://whatever.realtime.app");
//     const conn = factory.create(RealtimeProviders.Dummy);

//     expect(factory.create('Test')).toThrowError(Error);
// });
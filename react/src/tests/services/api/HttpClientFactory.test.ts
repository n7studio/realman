import { HttpClientFactory } from '../../../services/api/HttpClientFactory';
import { HttpClients } from '../../../enums/HttpClients';

test('create connection', () => {
    const factory = new HttpClientFactory("http://whatever.api.app");
    const conn = factory.create(HttpClients.Dummy);

    expect(conn).toHaveProperty("get");
});


// test('expects error if creating a unkown provider', () => {
//     const factory = new RealtimeConnectionFactory("http://whatever.realtime.app");
//     const conn = factory.create(RealtimeProviders.Dummy);

//     expect(factory.create('Test')).toThrowError(Error);
// });
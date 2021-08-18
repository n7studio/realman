import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { GameApiClient } from '../services/api/GameApiClient';
import { Container } from 'react-di';
import { RealtimeConnectionFactory } from '../services/realtime/RealtimeConnectionFactory';
import { RealtimeProviders } from '../enums/RealtimeProviders';
import { RealtimeGameClient } from '../services/realtime/RealtimeGameClient';
import { HttpClientFactory } from '../services/api/HttpClientFactory';

export default {
    store: (c:Container) => {
        const sagaMiddleware = c.get('sagaMiddleware');
        const middlewares = [];
        middlewares.push(applyMiddleware(sagaMiddleware));
        middlewares.push(devToolsEnhancer({}));

        return createStore(
            (s:any) => s,
            compose(...middlewares)
        );
    },
    sagaMiddleware: (c:Container) => {
        const apiClient = c.get('apiClient');
        const realtimeClient = c.get('realtimeClient');

        return createSagaMiddleware({
            context: {
                apiClient,
                realtimeClient
            }
        });
    },
    apiClient: (c:Container) => {
        const httpClient = c.get('httpClient');
        const apiClient = new GameApiClient(httpClient);

        return apiClient;
    },
    realtimeClient: (c:Container) => {
        const conn = c.get("realtimeConnection");
        
        return new RealtimeGameClient(conn);
    },
    httpClient: (c:Container) => {
        const gameApiUrl = c.get("gameApiUrl");
        const factory = new HttpClientFactory(gameApiUrl);
        
        return factory.create(RealtimeProviders.Dummy);
    },
    realtimeConnection: (c:Container) => {
        const gameRealtimeUrl = c.get("gameRealtimeUrl");
        const factory = new RealtimeConnectionFactory(gameRealtimeUrl);
                
        return factory.create(RealtimeProviders.SignalR);
    },
    gameRealtimeUrl: process.env.REACT_APP_GAME_REALTIME_URL,
    gameApiUrl: process.env.REACT_APP_GAME_API_URL
}
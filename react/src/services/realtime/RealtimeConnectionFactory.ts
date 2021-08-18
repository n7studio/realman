import { SupportedRealtimeProvider } from '../../types/SupportedRealtimeProvider';
import { RealtimeProviders } from '../../enums/RealtimeProviders'
import { RealtimeConnectionInterface } from '../../modules/realtime/types/RealtimeConnectionInterface';
import { DummyConnection } from './DummyConnection';
import { HubConnectionBuilder } from '@microsoft/signalr';

export class RealtimeConnectionFactory {

    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public create(provider: SupportedRealtimeProvider): RealtimeConnectionInterface {

        if (RealtimeProviders.SignalR) {
            const connection = new HubConnectionBuilder()
                .withUrl(this.url)
                .withAutomaticReconnect()
                .build();

            return connection;
        } else if (provider === RealtimeProviders.Dummy) {
            return this.createDummyConnection();
        }

        throw Error(`Unsupported realtime provider "${provider}"`);
    }

    private createDummyConnection(): RealtimeConnectionInterface {
        return new DummyConnection();
    }
}
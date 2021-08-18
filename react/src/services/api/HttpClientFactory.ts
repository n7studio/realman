import { SupportedHttpClient } from '../../types/SupportedHttpClient';
import { HttpClients } from '../../enums/HttpClients'
import { HttpClientInterface } from '../../types/HttpClientInterface';
import { DummyHttpClient } from './DummyHttpClient';

export class HttpClientFactory {
    
    private url:string;
    
    constructor(url:string){
        this.url = url;
    }

    public create(httpClientName:SupportedHttpClient):HttpClientInterface {

        if(httpClientName === HttpClients.Dummy){
            return this.createDummyClient();
        }

        throw Error(`Unsupported http client "${httpClientName}"`);
    }

    private createDummyClient():HttpClientInterface {
        return new DummyHttpClient();
    }
}
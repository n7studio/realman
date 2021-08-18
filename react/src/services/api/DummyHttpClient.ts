import { HttpClientInterface } from '../../types/HttpClientInterface';

export class DummyHttpClient implements HttpClientInterface {
    get<T = any, R = any>(url: string, config?: any): Promise<R> {

        const response:any = {
            data: {
                results: [
                    {
                        id: "girlName",
                        name: "Girl name"
                    },
                    {
                        id: "boyName",
                        name: "Boy name"
                    },
                    {
                        id: "country",
                        name: "Country"
                    },
                    {
                        id: "animal",
                        name: "Animal"
                    },
                    {
                        id: "city",
                        name: "City"
                    }
                ]
            }
        }
        
        return  Promise.resolve(response);
    }
}
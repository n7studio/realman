import { HttpClientInterface } from '../../types/HttpClientInterface';

export class GameApiClient {

    httpClient;

    constructor(httpClient: HttpClientInterface) {
        this.httpClient = httpClient;
    }

   public async getCategories(){

        const response = await this.httpClient.get("/categories");
        const categories = response.data.results;
        return categories;
    }

    // searchCategories():string {
    //     return "";
    // }
}
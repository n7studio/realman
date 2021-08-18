import { Category } from "../../../../types/models";
import { EntitiesState } from "../../../../types/state";
import {addMultipleCategories} from "../../../../store/entities/reducers";


describe('add multiple categories reducer', () => {

    it('should add multiple categories', () => {

        const initialState = {
            categories: {
               byId:{
                   Ville: {
                       id: "Ville",
                       name: "Ville"
                   },
                   Pays: {
                       id: "pays",
                       name: "Pays"
                   }
               }
            },
            letters: {
                byId:{}
            }
        };

        const multipleCategories: Array<Category> =
            [
                {
                    id: "marque",
                    name: "Marque"
                },
                {
                    id: "pays",
                    name: "Pays"
                },
            ];

        const newState: any = addMultipleCategories.call(initialState, multipleCategories);
        let byId:{[key:string]:Category} = {...initialState.categories.byId};
        multipleCategories.map((category:Category) => {
            byId[category.id] = category;
        });
        expect(Object.keys(newState.categories.byId).length).toEqual(4);
        expect(newState).toStrictEqual({
            categories:{byId:byId},
            letters: {byId:{}}
        })
    });
});

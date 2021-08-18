import { useDependency } from "react-di";
import { useGame } from "../../../../hooks/useGame";
import { usePlayableCategories } from "../../../../hooks/usePlayableCategories";
import { useEntities } from "../../../../modules/players/hooks/useEntities";
import { AddListener } from "../../../../modules/realtime/listeners/AddListener";
import { RemoveListener } from "../../../../modules/realtime/listeners/RemoveListener";
import { RealtimeGameClient } from "../../../../services/realtime/RealtimeGameClient";


export function CategorySelectedListener() {
    const realtimeClient: RealtimeGameClient = useDependency("realtimeClient");
    const { actions: { addPlayableCategory, removePlayableCategory } } = useGame();
    const { entities: { categories } } = useEntities();
    const { ids } = usePlayableCategories();
    
    return (
        <>
            <AddListener 
                addResource={(categoryId:string) => addPlayableCategory(categories.byId[categoryId])}
                filter={(categoryId:string) => !Object.keys(ids).includes(categoryId)}
                methodName={"onPlayableCategorySelected"}
                realtimeClient={realtimeClient}
            />
            <RemoveListener 
                removeResource={(categoryId:string) => removePlayableCategory(categories.byId[categoryId])}
                localResources={ids}
                methodName={"onPlayableCategorySelected"}
                realtimeClient={realtimeClient}
            />
        </>
    );
}




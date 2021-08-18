import { useDependency } from "react-di";
import { RealtimeGameClient } from "../../../../services/realtime/RealtimeGameClient";
import { Player } from "../../types/models";
import { useEntities } from "../../hooks/useEntities";
import { AddListener } from "../../../realtime/listeners/AddListener/AddListener";
import { RemoveListener } from "../../../realtime/listeners/RemoveListener";
import { usePlayers } from "../../hooks/usePlayers";
import {useGame} from "../../../../hooks/useGame";


export function PlayerConnectedListener() {

    const realtimeClient: RealtimeGameClient = useDependency("realtimeClient");
    const { entities: { players: { byId } }, actions: { addPlayer, removePlayer} } = useEntities();
    const players = usePlayers();

    const {
        actions:{addContendingPlayer}
    } = useGame();

    return (
        <>
            <AddListener 
                addResource={(player:Player)=>{
                    addPlayer(player);
                    addContendingPlayer(player.name);
                }}
                filter={(remoteResource:Player) => !Object.keys(byId).includes(remoteResource.name)}
                methodName={"onPlayerJoined"}
                realtimeClient={realtimeClient}
            />
            <RemoveListener
                removeResource={removePlayer}
                methodName={"onPlayerLeft"}
                realtimeClient={realtimeClient}
                property={"name"}
                localResources={players}
            />
        </>
    );
}

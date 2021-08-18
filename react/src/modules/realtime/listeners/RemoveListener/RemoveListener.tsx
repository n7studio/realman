import { useEffect, useState } from "react";

interface RemoveListenerProps {
  realtimeClient:any
  methodName:string
  removeResource:Function
  localResources:any[]
  property?:string
}

export function RemoveListener({realtimeClient, methodName, removeResource, localResources, property}:RemoveListenerProps) {

    const [remoteResources, setRemoteResources] = useState([]);

    useEffect(() => {

        
        const allResources = [...remoteResources, ...localResources];
        // console.log("HELLO ----> : ", allResources)
        // console.log("all resources => ", allResources)
        const removedResources = allResources.filter((resource) => {
            return !remoteResources.find(remoteResource => {
                if(property){
                    return remoteResource[property] === resource[property]
                }else {
                    return remoteResource === resource;
                }
            });
        });
        removedResources.forEach(resource => removeResource(resource));
    }, [remoteResources]);



    useEffect(() => {
        realtimeClient[methodName]((remoteResources:[]) => setRemoteResources([...remoteResources]));
    }, []);

    // useEffect(() => {
    //     //Add new connected players
    //     const newConnectedPlayers = connectedPlayers.filter(connectedPlayer => !(connectedPlayer.name in byId));
    //     newConnectedPlayers.forEach(player => addPlayer(player));

    //     //Remove disconnected players
    //     const allPotentialPlayers = [...newConnectedPlayers, ...Object.keys(byId).map(playerId => byId[playerId])];
    //     const disconnectedPlayers = allPotentialPlayers.filter((player:Player) => {
    //         return !connectedPlayers.find(connectedPlayer => connectedPlayer.name === player.name);
    //     });
    //     disconnectedPlayers.forEach((player:Player) => removePlayer(player));
    // }, [connectedPlayers]);

    // useEffect(() => {
    //     realtimeClient.onPlayerJoined((connectedPlayers:Array<Player>) => setConnectedPlayers([...connectedPlayers]));
    //     realtimeClient.onPlayerLeft((connectedPlayers:Array<Player>) => setConnectedPlayers([...connectedPlayers]));
    // }, []);

    return <></>;
}




import { useEffect, useState } from "react";

interface AddListenerProps {
  realtimeClient:any
  methodName:string
  addResource:Function
  filter:(value: never, index: number, array: never[]) => unknown
}

export function AddListener({realtimeClient, methodName, addResource, filter}:AddListenerProps) {

    const [remoteResources, setRemoteResources] = useState([]);

    useEffect(() => {
        const newLocalResources = remoteResources.filter(filter);
        newLocalResources.forEach(resource => addResource(resource));
    }, [remoteResources]);

    useEffect(() => {
        realtimeClient[methodName]((remoteResources:[]) => setRemoteResources([...remoteResources]));
    }, []);

    return <></>;
}




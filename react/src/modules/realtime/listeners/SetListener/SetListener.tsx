import { useEffect, useState } from "react";

interface SeListenerProps {
  realtimeClient:any
  methodName:string
  setValue:Function
}

export function SetListener({realtimeClient, methodName, setValue}:SeListenerProps) {

    const [remoteValue, setRemoteValue] = useState([]);

    useEffect(() => {
    setValue(remoteValue);
    }, [remoteValue]);


    useEffect(() => {
        realtimeClient[methodName]((remoteResources:[]) => setRemoteValue([...remoteResources]));
    }, []);

    return <></>;
}




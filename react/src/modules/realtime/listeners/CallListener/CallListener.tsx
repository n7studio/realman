import {useEffect, useState} from "react";


interface CallListenerProps {
    realtimeClient:any
    methodName:string
    call:Function
}

export function CallListener({realtimeClient, methodName, call}:CallListenerProps) {

    useEffect(() => {
        realtimeClient[methodName](() => call());
    }, []);

    return <></>;
}




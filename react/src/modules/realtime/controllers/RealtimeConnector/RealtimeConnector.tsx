import { useEffect } from 'react';
import { useConnection } from './useConnection';

interface RealtimeConnectorProps {
    onConnectionSuccess:Function
}

export function RealtimeConnector({ onConnectionSuccess }:RealtimeConnectorProps) {

    const { start } = useConnection();

    useEffect(() => {
        start(onConnectionSuccess);
    }, []);

    return (
        <></>
    );
}
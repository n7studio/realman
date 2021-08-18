import { useDependency } from "react-di";

export function useConnection() {
    const conn = useDependency('realtimeConnection');

    const start = (onConnectionSuccess:Function) => {
        conn.start().then(() => {
            onConnectionSuccess();
        });
    }

    return { start };
}
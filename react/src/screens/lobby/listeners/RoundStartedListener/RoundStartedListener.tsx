import {RealtimeGameClient} from "../../../../services/realtime/RealtimeGameClient";
import {useDependency} from "react-di";
import {useGame} from "../../../../hooks/useGame";
import {CallListener} from "../../../../modules/realtime/listeners/CallListener";


export function RoundStartedListener(){
    const realtimeClient: RealtimeGameClient = useDependency("realtimeClient");
    const { actions: { createRound } } = useGame();

    return (
        <>
            <CallListener
                call={createRound}
                methodName={"onRoundStarted"}
                realtimeClient={realtimeClient}
            />

        </>
    );
}
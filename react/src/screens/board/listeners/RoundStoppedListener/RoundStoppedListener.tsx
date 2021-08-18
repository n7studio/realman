import {RealtimeGameClient} from "../../../../services/realtime/RealtimeGameClient";
import {useDependency} from "react-di";
import {useGame} from "../../../../hooks/useGame";
import {CallListener} from "../../../../modules/realtime/listeners/CallListener";

export function RoundStoppedListener(){
    const realtimeClient: RealtimeGameClient = useDependency("realtimeClient");
    const { actions: { setCurrentRoundToStopped } } = useGame();

    return (
        <>
            <CallListener
                call={setCurrentRoundToStopped}
                methodName={"onRoundStopped"}
                realtimeClient={realtimeClient}
            />

        </>
    );
}

import { useEffect } from "react";
import { useDependency } from "react-di";
import { Letter } from "../../../../types/models";
import { RealtimeGameClient } from "../../../../services/realtime/RealtimeGameClient";
import { useGame } from "../../../../hooks/useGame";

interface RandomLetterChosenListenerProps {
  onRandomLetterChosen?: Function;
}

export function RandomLetterChosenListener({
  onRandomLetterChosen,
}: RandomLetterChosenListenerProps) {
  const realtimeClient: RealtimeGameClient = useDependency("realtimeClient");

  const {
    actions: { addRandomLetter },
  } = useGame();

  useEffect(() => {
    realtimeClient.onRandomLetterChosen((randomLetter: Letter) => {
      addRandomLetter(randomLetter);

      if (onRandomLetterChosen) {
        onRandomLetterChosen();
      }
    });
  }, []);

  return <></>;
}

import { useEffect } from "react";
import { Letter } from "../../../../types/models";
import { RealtimeGameClient } from "../../../../services/realtime/RealtimeGameClient";
import { useLetters } from "../../../../hooks/useLetters";
import { useDependency } from "react-di";

export function LetterSelectedListener() {
  // const realtimeClient: RealtimeGameClient = useDependency("realtimeClient");
  // const {
  //   actions: { addPlayableLetter },
  // } = useLetters();

  // useEffect(() => {
  //   realtimeClient.onPlayableLetterSelected((letter: Letter) =>
  //     addPlayableLetter(letter)
  //   );
  // }, []);

  return <></>;
}

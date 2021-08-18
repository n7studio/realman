import { useEntities } from "../../hooks/useEntities";
import { useGame } from "../../hooks/useGame";
import { renderHookWithStore } from "../../lib/react-testing-library-extensions/renderHookWithStore";

describe("Game hook", () => {
  it("should return all playable letters", () => {
    const initialState = {
      game: {
          playableLetters: ["A", "B"]
      },
    };

    const { result } = renderHookWithStore(
      () => useGame(),
      initialState
    );

    const { game } = result.current;

    expect(game.playableLetters.length).toBe(2);
    expect(game.playableLetters[0]).toBe("A");
    expect(game.playableLetters[1]).toBe("B");
  });
});

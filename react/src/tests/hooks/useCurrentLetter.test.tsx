import { useCurrentLetter } from "../../hooks/useCurrentLetter";
import { renderHookWithStore } from "../../lib/react-testing-library-extensions/renderHookWithStore";

describe("Current letter hook", () => {
  it("Should return the last chosen letter", () => {
    const initialState = {
      letters: {
        byId: {
          A: {
            id: "A",
            value: "A",
          },
        },
      },
    };

    const { result } = renderHookWithStore(
      () => useCurrentLetter(),
      initialState
    );

    const currentLetter = result.current;
    expect(currentLetter.value).toBe("A");
  });
});

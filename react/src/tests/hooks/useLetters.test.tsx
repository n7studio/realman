import { useLetters } from "../../hooks/useLetters";
import { renderHookWithStore } from "../../lib/react-testing-library-extensions/renderHookWithStore";

describe("Letters hook", () => {
  it("should return all letters as array", () => {
    const initialState = {
      entities: {
        letters: {
          byId: {
              A: {
                  id: "A",
                  value: "A",
              },
          },
        }
      },
    };

    const { result } = renderHookWithStore(
      () => useLetters(),
      initialState
    );

    const letters = result.current;

    expect(letters.length).toBe(1);
    expect(letters[0].id).toBe("A");
  });
});

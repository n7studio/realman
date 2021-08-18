import { useCategories } from "../../hooks/useCategories";
import { renderHookWithStore } from "../../lib/react-testing-library-extensions/renderHookWithStore";

describe("Round hook", () => {
  it("should start a round", () => {
    const initialState = {
      entities: {
          categories: {
            byId: {
                country: {
                    id: "country",
                    value: "Country",
                }
            },
          }
      },
      
    };

    const { result } = renderHookWithStore(
      () => useRound(),
      initialState
    );

    // const {letter, } = result.current;

    // expect(categories.length).toBe(1);
    // expect(categories[0].id).toBe("country");
  });
});

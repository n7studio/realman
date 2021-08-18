import { useCurrentLetter } from "../../hooks/useCurrentLetter";
import { usePlayableCategories } from "../../hooks/usePlayableCategories";
import { renderHookWithStore } from "../../lib/react-testing-library-extensions/renderHookWithStore";

describe("Playable categories hook", () => {
  it("should return all the playable categories", () => {
    const initialState = {
      entities: {
          categories: {
              byId: {
                  country: {
                      name: "Country",
                      id: "country"
                  }
              }
          }
      },
      game: {
          playableCategories: ["country"]
      }
  }

    const { result } = renderHookWithStore(
      () => usePlayableCategories(),
      initialState
    );

    console.log(result.current);
    // const playableCategories = result.current;

    // expect(playableCategories.length).toBe(1);
    // expect(playableCategories[0].value).toBe("Country");
  });
});

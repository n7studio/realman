import { useEntities } from "../../hooks/useEntities";
import { renderHookWithStore } from "../../lib/react-testing-library-extensions/renderHookWithStore";

describe("Entities hook", () => {
  it("should return all entities", () => {
    const initialState = {
      entities: {
          categories: {
            byId: {
                country: {
                    id: "country",
                    value: "Country",
                }
            },
          },
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
      () => useEntities(),
      initialState
    );

    const { entities} = result.current;

    expect(entities.categories.byId.country.id).toBe("country");
    expect(entities.letters.byId.A.id).toBe("A");
  });
});

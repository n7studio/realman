import { render, screen, fireEvent } from "@testing-library/react";
import { LetterSelect } from "../../../../../screens/lobby/materials/LetterSelect";
import { Letter } from "../../../../../types/models";
import { getLetters } from "../../../../../helpers/getLetters";

const letters = getLetters();

describe("LetterSelect components", () => {
  it("renders all categories provided", () => {
    render(
      <LetterSelect
        letters={letters}
        selectedLetters={[]}
        onSelected={() => {}}
        onUnselected={() => {}}
      />
    );

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });

  it("select letter when clicked", () => {
    let selectedLetter: any = null;
    render(
      <LetterSelect
        letters={letters}
        selectedLetters={[]}
        onSelected={(letter: Letter) => {
          selectedLetter = letter;
        }}
        onUnselected={() => {}}
      />
    );

    const categoryElement = screen.getByText("A");
    fireEvent.click(categoryElement);
    expect(selectedLetter.value).toBe("A");
  });

  it("unselect letter when clicked", () => {
    let unselectedLetter: any = null;
    render(
      <LetterSelect
        letters={letters}
        selectedLetters={[{id:"A",value:"A"}]}
        onSelected={() => {}}
        onUnselected={(letter: Letter) => {
          unselectedLetter = letter;
        }}
      />
    );

    const categoryElement = screen.getByText("A");
    fireEvent.click(categoryElement);
    expect(unselectedLetter.value).toBe("A");
  });
})

import {
  render,
  screen
} from "@testing-library/react";
import { CategorySelect } from "../../../../../screens/lobby/materials/CategorySelect";
import { Category } from "../../../../../types/models";

test("renders all categories provided", () => {
  const categories: Array<Category> = [
    {
      name: "Ville",
      id: "Ville",
    },
    {
      name: "Pays",
      id: "pays",
    },
  ];
  render(
    <CategorySelect
      categories={categories}
      selectedCategories={[]}
      onSelected={() => {}}
      onUnselected={() => {}}
    />
  );
  const categoryElement = screen.getByText("Ville");
  expect(categoryElement).toBeInTheDocument();

  const categoryElementPays = screen.getByText("Pays");
  expect(categoryElementPays).toBeInTheDocument();
});

// test("select category when clicked", () => {
//   const categories: Array<Category> = [{ name: "ville", label: "Ville" }, { name: "Pays", name: "Pays" }];
//   render(<CategorySelect categories={categories} />);
//   const categoryElement = screen.getByText("Ville");
//   fireEvent.click(categoryElement);
//   expect(categoryElement).toHaveClass("selectedCategory");
// });

// test("unselect category when clicked twice", () => {
//   const categories: Array<Category> = [{ name: "Ville" }, { name: "Pays" }];
//   render(<SelectCategory categories={categories} />);
//   const categoryElement = screen.getByText("Ville");
//   fireEvent.click(categoryElement);
//   expect(categoryElement).toHaveClass("selectedCategory");

//   fireEvent.click(categoryElement);
//   expect(categoryElement).toHaveClass("unselectedCategory");
// });

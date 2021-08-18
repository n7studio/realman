import styles from "./CategorySelect.module.scss";
import {playSound} from "../../../../helpers/playSound";
import { Category } from "../../../../types/models";

export interface CategorySelectProps {
  categories: Array<Category>;
  selectedCategories: Array<Category>;
  onSelected: Function;
  onUnselected: Function;
}

export function CategorySelect({
  categories,
  selectedCategories,
  onSelected,
  onUnselected,
}: CategorySelectProps) {
  return (
    <>
      {categories.map((category) => {
        const isSelected = selectedCategories.map(selectedCategory => selectedCategory.id).includes(category.id);
        return (
          <div
            key={category.id}
            className={
              isSelected? styles.selectedCategory
                : styles.unselectedCategory
            }
            onClick={() => {
              if (isSelected) {
                onUnselected(category);
              } else {
                onSelected(category);
                playSound();
              }
            }}
          >
            {category.name}
          </div>
        );
      })}
    </>
  );
}
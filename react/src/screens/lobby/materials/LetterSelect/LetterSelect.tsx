import { Letter } from "../../../../types/models";
import styles from "./LetterSelect.module.scss";
import {playSound} from "../../../../helpers/playSound";

interface LetterSelectProps {
  letters: Array<Letter>;
  selectedLetters: Array<Letter>;
  onSelected: Function;
  onUnselected: Function;
}

export function LetterSelect({
  letters,
  selectedLetters,
  onSelected,
  onUnselected,
}: LetterSelectProps) {
  return (
    <>
      {letters.map((letter) => {
        const isSelected = selectedLetters.map(selectedLetter => selectedLetter.id).includes(letter.id);

        return (
          <div
            key={letter.id}
            className={
             isSelected
                ? styles.selectedLetter
                : styles.unselectedLetter
            }
            onClick={() => {
              if (isSelected) {
                onUnselected(letter);
              } else {
                onSelected(letter);
                playSound();
              }
            }}
          >
            {letter.value}
          </div>
        );
      })}
    </>
  );
}

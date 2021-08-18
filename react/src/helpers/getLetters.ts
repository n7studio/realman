import { AlphabetLetters } from "../enums/AlphabetLetters";
import { Letter } from "../types/models";

export function getLetters() {
    const alphabetLetters: Array<string> = Object.keys(AlphabetLetters).map(
        (alphabetLetter) => {
            return alphabetLetter as string;
        }
    );

    const letters: Array<Letter> = alphabetLetters.map(
        (alphabetLetter: string) => {
            const letter: Letter = {
                value: alphabetLetter,
                id: alphabetLetter
            };

            return letter;
        }
    );

    return letters;
}
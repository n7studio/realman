import {useCategoryTextField} from "../../../../hooks/useCategoryTextField";
import {useGame} from "../../../../hooks/useGame";
import {Category} from "../../../../types/models";
import { Player } from "../../../../modules/players/types/models";
import styles from "./CategoryTextField.module.scss"
import {RoundStatuses} from "../../../../enums/RoundStatuses";
import {useCurrentRound} from "../../../../hooks/useCurrentRound";

export interface CategoryTextFieldProps {
    letter: string;
    category: Category;
    currentPlayer: Player
}

export function CategoryTextField({letter, category, currentPlayer}: CategoryTextFieldProps) {
    const {
        actions: {
            activateCategoryTextField,
            deactivateCategoryTextField,
            writeCategoryTextFieldValue,
            dirtyCategoryTextField,
            cleanCategoryTextField,
        }
    } = useGame();

    const {status} = useCurrentRound();

    const {isActive, isDirty,} = useCategoryTextField(category, currentPlayer);

    return (
            <input placeholder={`${letter}...`} className={isActive? styles.isActive : styles.isInactive}
                onFocus={ () => activateCategoryTextField( {category, currentPlayer})}
                onBlur={() =>  deactivateCategoryTextField( {category, currentPlayer})}
                disabled={status === RoundStatuses.STOPPED}
                onChange={(event) => {
                    const value = event.target.value;
                    const isValueEmpty = value.length === 0;
                    
                    writeCategoryTextFieldValue({category, currentPlayer, value});

                    if(!isValueEmpty && !isDirty){
                        dirtyCategoryTextField({category, currentPlayer});
                    }
                    if(isValueEmpty && isDirty) {
                        cleanCategoryTextField({category, currentPlayer});
                    }
            }}
        />
    );
}
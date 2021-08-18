import {useCategories} from "../../hooks/useCategories";
import {CategorySelect} from "./materials/CategorySelect";
import {LetterSelect} from "./materials/LetterSelect";
import {Category, Letter} from "../../types/models";
import {useLetters} from "../../hooks/useLetters";
import {StartButton} from "./materials/StartButton";
import {Redirect, useHistory} from "react-router-dom";
import {usePlayableCategories} from "../../hooks/usePlayableCategories";
import {useGame} from "../../hooks/useGame";
import {usePlayableLetters} from "../../hooks/usePlayableLetters";
import {PlayerCard, usePlayers} from "../../modules/players";
import styles from "./LobbyScreen.module.scss";
import {Player} from "../../modules/players/types/models";
import {CategorySelectedListener, RoundStartedListener} from "./listeners/";
import {useCurrentRound} from "../../hooks/useCurrentRound";
import {RoundStatuses} from "../../enums/RoundStatuses";

export function LobbyScreen() {
  const categories = useCategories();
  const {categories: playableCategories} = usePlayableCategories();

  const letters = useLetters();
  const players = usePlayers();
  const playableLetters = usePlayableLetters();

  const {
    actions: {
      selectPlayableLetter,
      unselectPlayableLetter,
      selectPlayableCategory,
      unselectPlayableCategory,
      startRound,
      addContendingPlayer
    },
  } = useGame();

  const history = useHistory();
  const {round} = useCurrentRound();


    if(round?.status === RoundStatuses.IN_PROGRESS){
        return <Redirect
            to={{
                pathname: "/board"
            }}
        />
    }
  return (
    <>
      <section>
        <h1>Players:</h1>
        <ul className={styles["player-list"]}>
          {players.map((player: Player) => {
            return (
              <li key={player.name}>
                <PlayerCard
                  className={styles["player-card"]}
                  player={player}
                />
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h1>Setup</h1>
        <div>
          <h3>Choose your categories:</h3>
          <CategorySelect
            categories={categories}
            selectedCategories={playableCategories}
            onSelected={(category: Category) =>
              selectPlayableCategory(category)
            }
            onUnselected={(category: Category) =>
              unselectPlayableCategory(category)
            }
          />
        </div>

        {
          <div>
            <h3>Choose letters</h3>
            <LetterSelect
              letters={letters}
              selectedLetters={playableLetters}
              onSelected={(letter: Letter) => selectPlayableLetter(letter)}
              onUnselected={(letter: Letter) => unselectPlayableLetter(letter)}
            />
          </div>
        }
      </section>

      <br />
      <section>
        <StartButton
          onClick={() => {
            startRound();
            // history.push("/board");
          }}
        />
      </section>
      <RoundStartedListener/>
      <CategorySelectedListener />
    </>
  );
}

import {RandomLetterChosenListener, RoundStoppedListener} from "./listeners";
import {usePlayableCategories} from "../../hooks/usePlayableCategories";
import {Category} from "../../types/models";
import {Fragment} from "react";
import {Redirect, useHistory} from "react-router-dom";
import styles from "./BoardScreen.module.scss";
import {useCurrentRound} from "../../hooks/useCurrentRound";
import {useGame} from "../../hooks/useGame";
import {usePlayers} from "../../modules/players";
import {Player} from "../../modules/players/types/models";
import {CategoryTextField} from "./materials/CategoryTextField";
import {StopButton} from "./materials/StopButton";
import {RoundStatuses} from "../../enums/RoundStatuses";
import {useSession} from "../../hooks/useSession";
import {useEntities} from "../../modules/players/hooks/useEntities";

export function BoardScreen() {
  const history = useHistory();
  const {
    actions: { chooseRandomLetter,stopRound },
  } = useGame();
  const  { categories: playableCategories }  = usePlayableCategories();
  const players = usePlayers();
  const { entities: { players: { byId } } } = useEntities();

  const { letter , round} = useCurrentRound();
  const { session: { player:playerName } } = useSession();

  console.log(players,playerName);


    if(round?.status === RoundStatuses.STOPPED){
      return <Redirect
              to={{
              pathname: "/vote"
          }}
      />
  }
    return (
        <>
            <button
                style={{
                    position: "absolute",
                    bottom: "25px",
                    right: "25px",
                    fontSize: "1.5rem",
                }}
                onClick={() => {
                    history.push("/lobby");
                }}
            >
                {" < Lobby "}
            </button>

            <StopButton onClick={()=>{
                stopRound();
            }}/>

            <div className={styles["board-container"]}>
                <div className={styles["my-board"]}>
                    <div className={styles["letter-container"]}>
                        <p className={styles["letter-label"]}>Your letter is</p>
                        <h1 className={styles["letter"]}>{letter}</h1>
                        <button
                            className={styles["choose-letter"]}
                            onClick={() => chooseRandomLetter()}
                        >
                            <img src="/rotating-arrow.svg" alt=""/>
                        </button>
                    </div>

                    <div className={styles["categories-container"]}>
                        <h1>Categories to fill: </h1>
                        {playableCategories.map((category: Category) => {
                            return (
                                <Fragment key={category.id}>
                                    <div key={category.id}>
                                        <label htmlFor="">{category.name}</label>
                                        <br/>
                                        <CategoryTextField letter={letter} category={category} currentPlayer={byId[playerName]}/>
                                    </div>
                                    <br/>
                                </Fragment>
                            );
                        })}
                    </div>
                </div>

                <div className={styles["players-boards-container"]}>
                {players.map((player: Player) => {
                    return <div>{player.name}</div>;
                })}
                </div>
            </div>
            <RoundStoppedListener/>
            <RandomLetterChosenListener/>
        </>
    );
}

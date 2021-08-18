import { MouseEventHandler } from "react";
import styles from "./StartButton.module.scss";

interface StartButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function StartButton({ onClick }: StartButtonProps) {
  return (
    <button className={styles["start-button"]} onClick={onClick}>
      Start
    </button>
  );
}

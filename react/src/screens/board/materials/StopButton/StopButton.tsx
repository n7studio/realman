import {MouseEventHandler} from "react";
import styles from "./StopButton.module.scss";


interface StopButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function StopButton({ onClick }: StopButtonProps) {
    return (
        <button className={styles["stop-button"]} onClick={onClick}>
            Stop
        </button>
    );
}

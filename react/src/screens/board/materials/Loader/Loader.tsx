import styles from "./Loader.module.scss";

export function Loader() {
  return (
    <>
      <div className={styles["lds-grid"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

import styles from "./MainCard.module.css";

export const MainCard = ({ children }) => {
  return <div className={styles.MainCard}>{children}</div>;
};

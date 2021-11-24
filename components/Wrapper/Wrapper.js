import styles from "./Wrapper.module.css";

export const Wrapper = ({ children }) => {
  return <main className={styles.Wrapper}>{children}</main>;
};

import styles from "./Container.module.css";

const Container = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;

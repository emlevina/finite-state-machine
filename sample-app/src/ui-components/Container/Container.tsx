import styles from "./Container.module.scss";

const Container = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;

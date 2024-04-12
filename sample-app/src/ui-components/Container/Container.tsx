import ThemeSwitch from "../ThemeSwitch";
import styles from "./Container.module.scss";

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <ThemeSwitch />
      {children}
    </div>
  );
};

export default Container;

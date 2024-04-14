import { useMachine } from "../../hooks/useMachine";
import { ThemeEvents, themeMachine } from "../../machines/themeMachine";
import styles from "./ThemeSwitch.module.scss";

export default function ThemeSwitch() {
  const {
    currentState: theme,
    send,
    currentContext: themeContext,
  } = useMachine(themeMachine);
  const toggleTheme = () => {
    send(ThemeEvents.TOGGLE);
  };

  return (
    <div onClick={toggleTheme} className={styles.switch}>
      <div className={theme === "light" ? styles.iconActive : styles.icon}>
        ☀️
      </div>
      <div className={theme === "dark" ? styles.iconActive : styles.icon}>
        🌙
      </div>
      {themeContext.counter >= 3 && <p>WOW! You do love switching themes!</p>}
    </div>
  );
}

import { useThemeContext } from "../../hooks/useThemeContext";
import styles from "./ThemeSwitch.module.scss";

export default function ThemeSwitch() {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div onClick={toggleTheme} className={styles.switch}>
      <div className={theme === "light" ? styles.iconActive : styles.icon}>
        ☀️
      </div>
      <div className={theme === "dark" ? styles.iconActive : styles.icon}>
        🌙
      </div>
    </div>
  );
}

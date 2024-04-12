import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export function useThemeContext() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
}

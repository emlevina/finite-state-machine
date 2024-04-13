import { useContext } from "react";
import ThemeContext from "../themes/ThemeContext";

export function useThemeContext() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
}

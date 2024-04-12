import React, { createContext, useEffect, useState } from "react";

enum Theme {
  Dark = "dark",
  Light = "light",
}

const ThemeContext = createContext({
  theme: Theme.Light,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const prefersDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useState<Theme>(
    prefersDarkTheme ? Theme.Dark : Theme.Light
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const themeColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--background-color");
    document.body.style.backgroundColor = themeColor;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.Dark ? Theme.Light : Theme.Dark
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

import React, { createContext, useLayoutEffect, useState } from "react";

enum Theme {
  Dark = "dark",
  Light = "light",
}

const ThemeContext = createContext({
  theme: Theme.Dark,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const prefersDarkTheme = window.localStorage.getItem("theme") === Theme.Dark;

  const [theme, setTheme] = useState<Theme>(
    prefersDarkTheme ? Theme.Dark : Theme.Light
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const themeColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--background-color");
    document.body.style.backgroundColor = themeColor;
    window.localStorage.setItem("theme", theme);
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

import { createMachine } from "kate-state";

export enum ThemeState {
  Dark = "dark",
  Light = "light",
}

export enum ThemeEvents {
  TOGGLE = "TOGGLE",
}

const initial =
  window.localStorage.getItem("theme") === ThemeState.Dark
    ? ThemeState.Dark
    : ThemeState.Light;

const setTheme = (theme: ThemeState) => {
  document.documentElement.setAttribute("data-theme", theme);
  const themeColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--background-color");
  document.body.style.backgroundColor = themeColor;
  window.localStorage.setItem("theme", theme);
};

export const themeMachine = createMachine({
  id: "themeMachine",
  initial,
  states: {
    [ThemeState.Light]: {
      on: {
        TOGGLE: ThemeState.Dark,
      },
      onEntry: (context, setContext) => {
        setTheme(ThemeState.Light);
        setContext({ counter: context.counter + 1 });
      },
    },
    [ThemeState.Dark]: {
      on: {
        TOGGLE: ThemeState.Light,
      },
      onEntry: (context, setContext) => {
        setTheme(ThemeState.Dark);
        setContext({ counter: context.counter + 1 });
      },
    },
  },
  context: {
    counter: 0,
  },
});

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import { ThemeProvider } from "./themes/ThemeContext";
import "./themes/themes.css";

console.log(process.env.NODE_ENV);
console.log(process.env.REACT_APP_RAPID_API_KEY);

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/worker");

  return worker.start();
}

enableMocking().then(() => {
  const container = document.getElementById("root");
  const root = createRoot(container!); // createRoot(container!) if you use TypeScript
  root.render(
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  );
});

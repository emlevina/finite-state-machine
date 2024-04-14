import { createRoot } from "react-dom/client";
import App from "./App";
import "./themes/reset.css";
import "./themes/themes.scss";

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
  root.render(<App />);
});

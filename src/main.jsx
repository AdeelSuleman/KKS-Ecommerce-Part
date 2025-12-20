import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

if (import.meta.env.MODE === "development") {
  const { StrictMode } = await import("react");
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  root.render(<App />);
}

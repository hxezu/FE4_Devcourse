import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App3 from "./App3.tsx";
import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App3 />
  </StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

const domContainer = document.querySelector("#root") as HTMLElement;
const root = createRoot(domContainer);

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

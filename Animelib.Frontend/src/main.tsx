import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@app";
import { attachReduxDevTools } from "@effector/redux-devtools-adapter";

attachReduxDevTools();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

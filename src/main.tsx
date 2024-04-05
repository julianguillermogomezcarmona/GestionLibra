import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  FluentProvider,
  teamsLightTheme,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>
);
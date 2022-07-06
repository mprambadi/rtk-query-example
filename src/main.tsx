import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { emptySplitApi } from "./store/emptyApi";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={emptySplitApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

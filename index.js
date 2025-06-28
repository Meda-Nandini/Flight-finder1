import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GeneralContextProvider from "./context/GeneralContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Flight-finder1">
      <GeneralContextProvider>
        <App />
      </GeneralContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

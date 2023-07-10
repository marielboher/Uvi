import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ServiceContext } from "./context/ServiceContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ServiceContext>
      <App />
    </ServiceContext>
  </React.StrictMode>
);

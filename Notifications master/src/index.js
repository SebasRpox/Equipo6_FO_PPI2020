import React from "react";
import ReactDOM from "react-dom";
import 'react-notifications/lib/notifications.css';
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

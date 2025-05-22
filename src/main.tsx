import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "modern-normalize";
import Modal from "react-modal";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

Modal.setAppElement("#root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { SWRConfig } from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>
);

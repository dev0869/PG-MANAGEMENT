import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </>
);

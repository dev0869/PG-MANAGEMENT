import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {store} from './app/store.js'
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </>
);

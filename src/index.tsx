import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { InitialState } from "./redux/reducers/initialState";
import { Provider } from "react-redux";
import { Hotel } from "./models/Hotel";

const initialState = (window as any).initialState as InitialState;
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

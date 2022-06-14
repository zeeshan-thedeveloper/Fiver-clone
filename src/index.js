
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Entrance from "./Containers/Entrance";
//import Test from './Containers/Test';
import { Provider } from "react-redux";
import store from './CentralRedux/CentralRedux';

ReactDOM.render(
  <Provider store={store}>
    <Entrance />
  </Provider>,
  document.getElementById("root")
);


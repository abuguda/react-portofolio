import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// popers error something missing
import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/@mdi/font/css/materialdesignicons.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

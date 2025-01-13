import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";
import storeV1 from "./store-v1";
import storeV3 from "./store-v3";
import Applica from "./Applica";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeV3}>
      <App />
      {/* <Applica /> */}
    </Provider>
  </React.StrictMode>
);

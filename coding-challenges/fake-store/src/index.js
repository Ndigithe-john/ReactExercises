import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

const customTheme = extendTheme({
  tokens: {
    fonts: {
      heading: { value: `'Figtree', sans-serif` },
      body: { value: `'Figtree', sans-serif` },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

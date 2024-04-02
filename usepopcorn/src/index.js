import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import StarRating from "./components/StarRating";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={8} />
    <StarRating color="red" size={24} className="test" defaultRating={3} />
    <StarRating /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

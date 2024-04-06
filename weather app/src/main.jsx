import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="smallscrn">Please open website <br></br> on a bigger screen</div>
    <div className="main">
      <App />
    </div>
  </React.StrictMode>
);
 
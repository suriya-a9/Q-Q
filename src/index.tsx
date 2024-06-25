import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Services from "./views/Services/Services";
import Appointment from "./views/Booking/Appointment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      {/* <App /> */}
      <Route path="/welcome-page" element={<App />} />
      <Route path="/" element={<Home />} />
      <Route path="/Q-Q/book-an-appointment" element={<Appointment />} />
      <Route path="/Q-Q/services" element={<Services />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

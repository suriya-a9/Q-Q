import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Services from "./views/Services/Services";
import Appointment from "./views/Booking/Appointment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router basename="/Q-Q">
    <Routes>
      <Route path="/welcome-page" element={<App />} />
      <Route path="/" element={<Home />} />
      <Route path="/book-an-appointment" element={<Appointment />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

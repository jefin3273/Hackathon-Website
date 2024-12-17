import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./error.jsx";
import {
  Navbar,
  Hero,
  Events,
  Guidelines,
  Set1,
  Set2,
  Judges,
  About,
  Terms_Conditions,
  Verify,
  Login,
} from "./components";

import ReactGA from "react-ga";
ReactGA.initialize("K6F7N5MR4K");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <div className="bg-error">
              <Navbar /> <Error />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="bg">
              <Navbar />
              <Hero />
            </div>
          }
        />
        <Route
          path="/events"
          element={
            <div className="events-bg">
              <Navbar />
              <Events />
            </div>
          }
        />
        <Route
          path="/guidelines"
          element={
            <div className="guidelines-bg">
              <Navbar />
              <Guidelines />
            </div>
          }
        />
        <Route
          path="/set2"
          element={
            <div className="set2-bg">
              <Navbar />
              <Set2 />
            </div>
          }
        />
        <Route
          path="/set1"
          element={
            <div className="set1-bg">
              <Navbar />
              <Set1 />
            </div>
          }
        />
                <Route
          path="/Terms_Conditions"
          element={
            <div className="guidelines-bg">
              <Navbar />
              <Terms_Conditions />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <About />
            </div>
          }
        />
        <Route
          path="/judges"
          element={
            <div>
              <Navbar />
              <Judges />
            </div>
          }
        />
        <Route path="/qr/verify/:id" element={<Verify />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

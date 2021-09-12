import React from "react";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <Search />
        <CurrentWeather />
      </div>
      <Footer />
    </div>
  );
}

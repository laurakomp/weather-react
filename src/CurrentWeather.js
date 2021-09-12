import React from "react";

import "./CurrentWeather.css";

import WeatherPicture from "./sunny.png";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="weather-info">
        <ul>
          <li>
            <span id="date">Friday 14:25</span>
          </li>
          <li>
            <h1 id="city">Tallinn</h1>
          </li>
          <li>
            <div className="weather-image">
              <img src={WeatherPicture} alt="" id="icon" />
            </div>
          </li>
          <li>
            <div className="weather-temperature">
              <strong id="temperature">21</strong>
              <span className="units">°C</span>
            </div>
          </li>
        </ul>
      </div>
      <hr className="line" />
      <div className="description">
        <div className="row">
          <div className="col-4">
            <div className="wind">
              <ul>
                <li>wind</li>
                <li>
                  <span id="wind"></span>
                  <span class="wind-units">m/s</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="current-description">
              <ul>
                <li>
                  <span id="weather-description"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="humidity">
              <ul>
                <li>humidity</li>
                <li>
                  <span id="humidity"></span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

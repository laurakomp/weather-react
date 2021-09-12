import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-form" className="mb-3">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control search-input"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div className="col-2">
          <input type="submit" className="btn btn-go" value="Search" />
        </div>
      </div>
    </form>
  );
}

import React from "react";
import "./Sidebar.css"; // Create a CSS file for styling
import { Route, Routes, Link } from "react-router-dom";
import Option1 from "./Option1";

function Learn() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>
            <Link to="/Learn/Option1">Option 1</Link>
          </li>
          <li>
            <Link to="/Learn/Option2">Option 1</Link>
          </li>
          <li>Option 3</li>
        </ul>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Learn;

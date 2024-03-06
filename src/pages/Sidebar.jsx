import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>
            <Link
              to="/Sidebar/Option1"
              style={{ textDecoration: "none", color: "white" }}
            >
              Option 1
            </Link>
          </li>
          <li>
            <Link
              to="/Sidebar/Option2"
              style={{ textDecoration: "none", color: "white" }}
            >
              Option 2
            </Link>
          </li>
          <li>Option 3</li>
        </ul>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Sidebar;

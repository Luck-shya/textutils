import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "dark" || props.mode === "blue" ? "dark" : "light"
      } bg-${
        props.mode === "blue"
          ? "primary"
          : props.mode === "red"
          ? "warning"
          : props.mode
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/textutils">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{
            color: props.mode !== "blue" ? "black" : "white",
          }}
        >
          <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
            <li className="nav-item ">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary mx-1" type="submit">
              Search
            </button>
          </form> */}

          <div
            className={`form-check form-switch text-${
              props.mode === "red" || "blue" ? "white" : "black"
            }`}
          >
            <button onClick={props.toggle2Mode} className="btn btn-primary ">
              {" "}
              Enable {props.mode === "red" ? "Blue" : "Red"} Mode
            </button>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "dark" || props.mode === "blue" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "light" ? "dark" : "light"}Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title Here",
  aboutText: "About",
};

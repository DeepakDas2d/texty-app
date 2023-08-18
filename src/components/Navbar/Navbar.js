import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const navBgColor = {
    backgroundColor: "#e3f2fd",
   };
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg  bg-body-tertiary  bg-dark border-bottom border-body"  > */}
      {/* <nav class="navbar bg-primary navbar-expand-lg border-bottom border-body" data-bs-theme="dark"> */}
      <nav class="navbar navbar-expand-lg" style={navBgColor}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TextyApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// data-bs-theme="dark"

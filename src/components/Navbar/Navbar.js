import React from "react";
import "./Navbar.css";
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg"  >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
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
                  {props.homeTitle}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                   {props.aboutTitle}
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

//setting proptypes of prop
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired,
  homeTitle: PropTypes.string.isRequired
}

//setting default value for props
Navbar.defaultProps ={
  title: "Set Title",
  aboutTitle: "Set Element",
  homeTitle: "Set Element"
}

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
          <a className="navbar-brand" href="/">
            SkyHigh
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Item 1
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Item 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  item 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
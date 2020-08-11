import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a
            className="waves-effect waves-light btn-large modal-trigger"
            href="#modal1"
          >
            Daniel Villarroel
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="#modal1"
              >
                About
              </a>
            </li>
            <li>
              <a className="waves-effect waves-light btn" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="waves-effect waves-light btn" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a
                className="waves-effect waves-light btn"
                href="Images\resume.pdf"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#!"
                data-target="slide-out"
                className="waves-effect waves-light btn sidenav-trigger show-on-large"
              >
                <i className="material-icons">menu</i>
              </a>
            </li>
          </ul>
          <a
            href="#!"
            data-target="slide-out"
            className="waves-effect waves-light btn sidenav-trigger"
          >
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;

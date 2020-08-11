/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Sidenav extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src="Images\anotherback.jpg" alt="" />
            </div>
            <a href="#user">
              <img className="circle" src="Images\me.jpg" alt="" />
            </a>
            <a style={{ color: "white" }} href="#name">
              <span name>Daniel Villarroel</span>
            </a>
          </div>
        </li>

        <li>
          <a className="waves-effect waves-light modal-trigger" href="#modal1">
            <i className="material-icons">portrait</i>About
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <i className="material-icons">developer_mode</i>Portfolio
          </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <h6>Contact Me:</h6>
        <li>
          <div className="row">
            <i className="fa fa-facebook"></i>
            <a
              className="side-nav-icon"
              href="https://www.facebook.com/danielalejandro.villarroelposada"
              target="_blank"
            >
              Daniel Alejandro Villarroel Posada
            </a>
          </div>
        </li>
        <li>
          <div className="row">
            <i className="fa fa-github"></i>
            <a
              className="side-nav-icon"
              href="https://github.com/Davpcoded"
              target="_blank"
            >
              Davpcoded
            </a>
          </div>
        </li>
        <li>
          <div className="row">
            <i className="fa fa-instagram"></i>
            <a
              className="side-nav-icon"
              href="https://www.instagram.com/danielongsk8/"
              target="_blank"
            >
              @Danielongsk8
            </a>
          </div>
        </li>

        <li>
          <div className="row">
            <i className="fa fa-envelope"></i>
            <a
              className="side-nav-icon"
              href="https://gmail.com"
              target="_blank"
            >
              handosnk82894@gmail.com
            </a>
          </div>
        </li>
      </ul>
    );
  }
}

export default Sidenav;

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5>Powered by:</h5>
              <p className="grey-text text-lighten-4">
                HTML5, CSS3, Materialize, JS, React
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 id="contact">Contact</h5>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/danielalejandro.villarroelposada"
                    target="_blank"
                    className="fa fa-facebook"
                    style={{ float: "right" }}
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/danielongsk8/"
                    target="_blank"
                    className="fa fa-instagram"
                    style={{ float: "right" }}
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/daniel-alejandro-villarroel/"
                    target="_blank"
                    className="fa fa-linkedin"
                    style={{ float: "right" }}
                  ></a>
                </li>
                <li>
                  <a
                    href="https://github.com/Davpcoded"
                    target="_blank"
                    className="fa fa-github"
                    style={{ float: "right" }}
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright
            <a className="grey-text text-lighten-4 right" href="#">
              Go back to the top
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;

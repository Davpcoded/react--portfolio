import React, { Component } from "react";
import M from "materialize-css";

class Parallax extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      M.Parallax.init(elems, {});
    });
  }
  render() {
    return (
      <div className="parallax-container">
        <div className="parallax">
          <img src="Images\EagleRider_Seattle.jpg" alt="" />
        </div>
      </div>
    );
  }
}
export default Parallax;

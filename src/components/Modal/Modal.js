import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      M.Modal.init(elems, {});
    });
  }
  render() {
    return (
      <div id="modal1" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4 style={{ textalign: "center" }}>Daniel Villarroel</h4>
          <img id="modalPicture" src="Images\me.jpg" alt="" />
          <p className="modal-text">
            I am a bilingual full stack web developer, enthusiastic and trilled
            to build my mastery every day. I enjoy adapting to different
            situations and challenging myself. I aim to work as confortable and
            effective as possible. My experience as a Bilingual Youth Counselor
            has taught me the value of great comunication to improve customer
            service and professional relationships with my team.{" "}
          </p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Close
          </a>
        </div>
      </div>
    );
  }
}
export default Modal;

import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="section white">
        <div className="row">
          <h2 className="header">Skills</h2>

          <div className="col s12 l3">
            <img className="skills-icon" alt="" src="Images\AJAX-logo.png" />
          </div>
          <div className="col s12 l3">
            <img
              className="skills-icon"
              alt=""
              src="Images\HTML5-CSS3-JS-Logo.png"
            />
          </div>
          <div className="col s12 l3">
            <img className="skills-icon" alt="" src="Images\OIP.jpg" />
          </div>
          <div className="col s12 l3">
            <img className="skills-icon" alt="" src="Images\Mongo-logo.png" />
          </div>
        </div>

        <div className="row">
          <div className="col s12 l3">
            <img className="skills-icon" alt="" src="Images\MySQL-logo.png" />
          </div>
          <div className="col s12 l3">
            <img className="skills-icon" alt="" src="Images\Node-logo.jpg" />
          </div>
          <div className="col s12 l3">
            <img className="skills-icon" alt="" src="Images\PHP-logo.png" />
          </div>
          <div className="col s12 l3">
            <img className="skills-icon" alt="" src="Images\npm.png" />
          </div>
        </div>

        <div className="row">
          <div className="col s12 l3">
            <img
              className="skills-icon"
              alt=""
              src="Images\Express-Frameworks_805.png"
            />
          </div>
          <div className="col s12 l3">
            <img
              className="skills-icon"
              alt=""
              src="Images\Responsive-logo.png"
            />
          </div>
          <div className="col s12 l3">
            <img
              className="skills-icon"
              alt=""
              src="Images\a-look-into-handlebarsjs.jpg"
            />
          </div>
          <div className="col s12 l3">
            <img
              className="skills-icon"
              alt=""
              src="http://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;

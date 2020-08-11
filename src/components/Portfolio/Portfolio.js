import React, { Component } from "react";
import M from "materialize-css";

class Portfolio extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems, { indicators: true });

      document.querySelectorAll(".follow-href").forEach((item) => {
        item.addEventListener("click", function openLink() {
          window.open(this, "_blank");
        });
      });
    });
  }
  render() {
    return (
      <div style={{ background: "black" }} className="carousel">
        <div className="row">
          <h1 id="portfolio">Portfolio</h1>
        </div>
        <div className="carousel-item" href="#one!">
          <h3>Code Quiz</h3>
          <img className="sliderImg" src="Images\Code-Quiz.gif" alt="" />
          <a
            href="https://github.com/Davpcoded/Code-quiz"
            className="waves-effect waves-light btn follow-href"
          >
            <i className="fa fa-github-alt"></i>Go to Repo
          </a>
          <a
            href="https://davpcoded.github.io/Code-quiz/"
            className="waves-effect waves-light btn follow-href"
            style={{ float: "right" }}
          >
            <i className="fa fa-external-link"></i>Go to URL
          </a>
        </div>
        <div className="carousel-item" href="#two!">
          <h3>Note Taker</h3>
          <img className="sliderImg" src="Images\Note Taker.gif" alt="" />
          <a
            href="https://github.com/Davpcoded/Express-Note-Taker"
            className="waves-effect waves-light btn follow-href"
          >
            <i className="fa fa-github-alt"></i>Go to Repo
          </a>
          <a
            href="https://scenic-badlands-34517.herokuapp.com/"
            className="waves-effect waves-light btn follow-href"
            style={{ float: "right" }}
          >
            <i className="fa fa-external-link"></i>Go to URL
          </a>
        </div>
        <div className="carousel-item" href="#three!">
          <h3>Get Task</h3>
          <img
            className="sliderImg"
            src="https://media.giphy.com/media/kgrEXP21525paGmONQ/giphy.gif"
            alt=""
          />
          <a
            href="https://github.com/Davpcoded/GetTask"
            className="waves-effect waves-light btn follow-href"
          >
            <i className="fa fa-github-alt"></i>Go to Repo
          </a>
          <a
            href="https://calm-scrubland-27592.herokuapp.com/"
            className="waves-effect waves-light btn follow-href"
            style={{ float: "right" }}
          >
            <i className="fa fa-external-link"></i>Go to URL
          </a>
        </div>
        <div className="carousel-item" href="#four!">
          <h3>Recipe Master</h3>
          <img
            className="sliderImg"
            src="https://media.giphy.com/media/LmN7Gm8TKC6huvYuxA/giphy.gif"
            alt=""
          />
          <a
            href="https://github.com/Davpcoded/Recipe-Master"
            className="waves-effect waves-light btn follow-href"
          >
            <i className="fa fa-github-alt"></i>Go to Repo
          </a>
          <a
            href="https://davpcoded.github.io/Recipe-Master/"
            className="waves-effect waves-light btn follow-href"
            style={{ float: "right" }}
          >
            <i className="fa fa-external-link"></i>Go to URL
          </a>
        </div>
        <div className="carousel-item" href="#five!">
          <h3>Work Day Scheduler</h3>
          <img
            className="sliderImg"
            src="Images\Work Day Scheduler.gif"
            alt=""
          />
          <a
            href="https://github.com/Davpcoded/Day-planner"
            className="waves-effect waves-light btn follow-href"
          >
            <i className="fa fa-github-alt"></i>Go to Repo
          </a>
          <a
            href="https://davpcoded.github.io/Day-planner/"
            className="waves-effect waves-light btn follow-href"
            style={{ float: "right" }}
          >
            <i className="fa fa-external-link"></i>Go to URL
          </a>
        </div>
        <div className="carousel-item" href="#five!">
          <h3>Weather Dashboard</h3>
          <img
            className="sliderImg"
            src="Images\Weather Dashboard.gif"
            alt=""
          />
          <a
            href="https://github.com/Davpcoded/Weather-Dashboard"
            className="waves-effect waves-light btn follow-href"
          >
            <i className="fa fa-github-alt"></i>Go to Repo
          </a>
          <a
            href="https://davpcoded.github.io/Weather-Dashboard/"
            className="waves-effect waves-light btn follow-href"
            style={{ float: "right" }}
          >
            <i className="fa fa-external-link"></i>Go to URL
          </a>
        </div>
      </div>
    );
  }
}
export default Portfolio;

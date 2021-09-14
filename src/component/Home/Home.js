import React from "react";
import "./Home.css";
import Play from "../../Svg/clarity_play-solid.svg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="Home">
      <h1>
        Manage <br />
        Your Task <br />
        Quickly
      </h1>
      <Link to="/todo" className="align-center link">
        <div className="btn align-center">
          <img src={Play} alt="Sad" />
          <h1>Click to Start</h1>
        </div>
      </Link>
    </div>
  );
}

export default Home;

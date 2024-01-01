import React from "react";

import "./Header.css";
import { MainLogo } from "../../SVG/MainLogo";
import { DownArrow } from "../../SVG/DownArrow";

export const Header = () => {
  return (
    <div className="header">
      <MainLogo />
      <div className="header-navigation">
        <span className="header-navtext">
          Features <DownArrow />
        </span>
        <span className="header-navtext">Pricing </span>
        <span className="header-navtext">
          Resources <DownArrow />
        </span>
        <div className="header-buttonContainer">
          <button className="header-buttonLogin">
            <b>Log in</b>
          </button>
          <button className="header-buttonSignUp">
            <b>Sign up</b>
          </button>
        </div>
      </div>
    </div>
  );
};

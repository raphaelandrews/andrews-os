import React from "react";
import "./style.css";
import logo from "../../assets/img/logo-andrews.svg";
import Theme from "../Theme/Theme";

const Taskbar = () => {
  return (
    <div className="taskbar" id="taskbar">
      <img src={logo} alt="Logo Andrews" className="taskbar__logo" />
      <div className="taskbar__island">   
          <i className="bx bx-cog taskbar__setting"></i>
      </div>
      <Theme />
    </div>
  );
};

export default Taskbar;

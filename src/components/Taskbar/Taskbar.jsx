import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/img/logo-andrews.svg";

const Taskbar = () => {
  return (
    <div className="taskbar" id="taskbar">
      <img src={logo} alt="Logo Andrews" className="taskbar__logo" />      
    </div>
  );
};

export default Taskbar;

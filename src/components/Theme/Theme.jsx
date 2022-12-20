import React from "react";
import "./style.css";

const Theme = () => {
  const body = document.body;
  const lightTheme = "light";
  const cyberpunkTheme = "cyberpunk";
  const altTheme = "alt";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === cyberpunkTheme || theme === altTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(cyberpunkTheme);
  }

  const switchCyberpunk = (e) => {
    if (theme === lightTheme || theme === altTheme) {
      body.classList.add(cyberpunkTheme);
      body.classList.remove(lightTheme, altTheme);
      localStorage.setItem("theme", "cyberpunk");
      theme = cyberpunkTheme;
    }
  };

  const switchLight = (e) => {
    if (theme === cyberpunkTheme || theme === altTheme) {
      body.classList.add(lightTheme);
      body.classList.remove(cyberpunkTheme, altTheme);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    }
  };

  const switchAlt = (e) => {
    if (theme === cyberpunkTheme || theme === lightTheme) {
      body.classList.add(altTheme);
      body.classList.remove(lightTheme, cyberpunkTheme);
      localStorage.setItem("theme", "alt");
      theme = altTheme;
    }
  };

  return (
    <div className="theme">
      <button
        onClick={(e) => switchCyberpunk(e)}
        className="theme__btn theme__btn-cyber"
      >
        <span className="theme__name">Cyberpunk</span>
        <span className="theme__picker">
          <span className="theme__palette theme__cyber-one"></span>
          <span className="theme__palette theme__cyber-two"></span>
          <span className="theme__palette"></span>
          <span className="theme__palette"></span>
        </span>
      </button>
      <button onClick={(e) => switchLight(e)} className="theme__btn theme__btn-cyber">
        <span className="theme__name">Cyberpunk</span>
        <span className="theme__picker">
          <span className="theme__palette theme__cyber-one"></span>
          <span className="theme__palette theme__cyber-two"></span>
          <span className="theme__palette"></span>
          <span className="theme__palette"></span>
        </span>
      </button>
      <button onClick={(e) => switchAlt(e)} className="theme__btn theme__btn-cyber">
        <span className="theme__name">Cyberpunk</span>
        <span className="theme__picker">
          <span className="theme__palette theme__cyber-one"></span>
          <span className="theme__palette theme__cyber-two"></span>
          <span className="theme__palette"></span>
          <span className="theme__palette"></span>
        </span>
      </button>
      <button onClick={(e) => switchAlt(e)} className="theme__btn theme__btn-cyber">
        <span className="theme__name">Cyberpunk</span>
        <span className="theme__picker">
          <span className="theme__palette theme__cyber-one"></span>
          <span className="theme__palette theme__cyber-two"></span>
          <span className="theme__palette"></span>
          <span className="theme__palette"></span>
        </span>
      </button>
      <button onClick={(e) => switchAlt(e)} className="theme__btn theme__btn-cyber">
        <span className="theme__name">Cyberpunk</span>
        <span className="theme__picker">
          <span className="theme__palette theme__cyber-one"></span>
          <span className="theme__palette theme__cyber-two"></span>
          <span className="theme__palette"></span>
          <span className="theme__palette"></span>
        </span>
      </button>
    </div>
  );
};

export default Theme;

import React from "react";

const Theme = () => {
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  const altTheme = "alt";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme || theme === altTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchDark = (e) => {
    if (theme === darkTheme || theme === altTheme) {
      body.classList.add(lightTheme);
      body.classList.remove(darkTheme, altTheme);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    }
  };

  const switchLight = (e) => {
    if (theme === lightTheme || theme === altTheme) {
      body.classList.add(darkTheme);
      body.classList.remove(lightTheme, altTheme);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  const switchAlt = (e) => {
    if (theme === darkTheme || theme === lightTheme) {
      body.classList.add(altTheme);
      body.classList.remove(lightTheme, darkTheme);
      localStorage.setItem("theme", "alt");
      theme = altTheme;
    }
  };

  return (
    <div>
      <button onClick={(e) => switchDark(e)} className=""></button>
      <button onClick={(e) => switchLight(e)} className=""></button>
      <button onClick={(e) => switchAlt(e)} className=""></button>
    </div>
  );
};

export default Theme;

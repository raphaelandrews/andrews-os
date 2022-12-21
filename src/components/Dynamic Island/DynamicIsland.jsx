import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Theme from "../Theme/Theme";

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(
    !initialIsVisible
  );
  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };
  
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

const DynamicIsland = () => {
  const [isIsland, setIsIsland] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const handleIsland = () => {
    setIsIsland(!isIsland);
  };

  return (
    <>
      {isComponentVisible === false ? (
        <div ref={ref} className="island">
          <i
            className="bx bx-cog island__setting rotate__setting-alt"
            onClick={() => setIsComponentVisible(true)}
          ></i>
        </div>
      ) : (
        <div ref={ref} className="island island-open">
          <i
            className="bx bx-cog island__setting island__setting-open rotate__setting"
            onClick={() => setIsComponentVisible(false)}
          ></i>
          <div className="island__themes">
            <Theme />
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicIsland;

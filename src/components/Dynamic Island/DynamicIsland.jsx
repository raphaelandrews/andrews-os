import React, { useState } from "react";
import "./style.css";

const DynamicIsland = () => {
  const [isIsland, setIsIsland] = useState(false);

  const handleIsland = () => {
    setIsIsland(!isIsland);
  };
  return (
    <>
      {isIsland === false ? (
        <div className="island">
          <i
            className="bx bx-cog island__setting rotate__setting-alt"
            onClick={handleIsland}
          ></i>
        </div>
      ) : (
        <div className="island island-open">
          <i
            className="bx bx-cog island__setting island__setting-open rotate__setting"
            onClick={handleIsland}
          ></i>
        </div>
      )}
    </>
  );
};

export default DynamicIsland;

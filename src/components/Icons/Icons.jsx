import React, { useState } from "react";
import "./style.css";

import "../System/style.css";
import Draggable from "react-draggable";
import System from "../System/System";
import Projects from "../Projects/Projects";

const Icons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFileOne, setIsFileOne] = useState(false);
  const [isFileTwo, setIsFileTwo] = useState(false);
  const [isFileThree, setIsFileThree] = useState(false);
  const [isFileFour, setIsFileFour] = useState(false);
  const [isFileFive, setIsFileFive] = useState(false);
  const [isFileSix, setIsFileSix] = useState(false);

  return (
    <>
      <div className="icons">
        <Projects
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isFileOne={isFileOne}
          setIsFileOne={setIsFileOne}
          isFileTwo={isFileTwo}
          setIsFileTwo={setIsFileTwo}
          isFileThree={isFileThree}
          setIsFileThree={setIsFileThree}
          isFileFour={isFileFour}
          setIsFileFour={setIsFileFour}
          isFileFive={isFileFive}
          setIsFileFive={setIsFileFive}
          isFileSix={isFileSix}
          setIsFileSix={setIsFileSix}
        />

        <System />

        <div className="icon__file cybr-btn">
          <i className="bx bx-user icon__img"></i>
          <div className="icon__text cybr-btn">About Me</div>
          <span className="cybr-btn__glitch">
            <i className="bx bx-user icon__img"></i>
            <div className="icon__text">About Me</div>
          </span>
        </div>

        <div className="icon__file cybr-btn">
          <i className="bx bxs-contact icon__img"></i>
          <div className="icon__text cybr-btn">Contact</div>
          <span className="cybr-btn__glitch">
            <i className="bx bx-user icon__img"></i>
            <div className="icon__text">Contact</div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Icons;

import React, { useState } from "react";
import "./style.css";

import "../System/style.css";
import Draggable from "react-draggable";
import System from "../System/System";
import Projects from "../Projects/Projects";

const Icons = () => {
  const [isProject, setIsProject] = useState(false);
  const [isFileOne, setIsFileOne] = useState(false);
  const [isFileTwo, setIsFileTwo] = useState(false);
  const [isFileThree, setIsFileThree] = useState(false);
  const [isFileFour, setIsFileFour] = useState(false);
  const [isFileFive, setIsFileFive] = useState(false);
  const [isFileSix, setIsFileSix] = useState(false);
  const [isSystem, setIsSystem] = useState(false);

  const [isDragging, setIsDragging] = useState({ status: false, zIndex: 100 });
  const [isDraggingOne, setIsDraggingOne] = useState({
    status: false,
    zIndex: 100,
  });
  const [isDraggingTwo, setIsDraggingTwo] = useState({
    status: false,
    zIndex: 100,
  });
  const [isDraggingThree, setIsDraggingThree] = useState({
    status: false,
    zIndex: 100,
  });
  const [isDraggingFour, setIsDraggingFour] = useState({
    status: false,
    zIndex: 100,
  });
  const [isDraggingFive, setIsDraggingFive] = useState({
    status: false,
    zIndex: 100,
  });
  const [isDraggingSix, setIsDraggingSix] = useState({
    status: false,
    zIndex: 100,
  });
  const [isDraggingSystem, setIsDraggingSystem] = useState({
    status: false,
    zIndex: 100,
  });

  return (
    <>
      <div className="icons">
        <Projects
          isProject={isProject}
          setIsProject={setIsProject}
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
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          isDraggingOne={isDraggingOne}
          setIsDraggingOne={setIsDraggingOne}
          isDraggingTwo={isDraggingTwo}
          setIsDraggingTwo={setIsDraggingTwo}
          isDraggingThree={isDraggingThree}
          setIsDraggingThree={setIsDraggingThree}
          isDraggingFour={isDraggingFour}
          setIsDraggingFour={setIsDraggingFour}
          isDraggingFive={isDraggingFive}
          setIsDraggingFive={setIsDraggingFive}
          isDraggingSix={isDraggingSix}
          setIsDraggingSix={setIsDraggingSix}
          isDraggingSystem={isDraggingSystem}
          setIsDraggingSystem={setIsDraggingSystem}
        />

        <System
          isSystem={isSystem}
          setIsSystem={setIsSystem}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          isDraggingOne={isDraggingOne}
          setIsDraggingOne={setIsDraggingOne}
          isDraggingTwo={isDraggingTwo}
          setIsDraggingTwo={setIsDraggingTwo}
          isDraggingThree={isDraggingThree}
          setIsDraggingThree={setIsDraggingThree}
          isDraggingFour={isDraggingFour}
          setIsDraggingFour={setIsDraggingFour}
          isDraggingFive={isDraggingFive}
          setIsDraggingFive={setIsDraggingFive}
          isDraggingSix={isDraggingSix}
          setIsDraggingSix={setIsDraggingSix}
          isDraggingSystem={isDraggingSystem}
          setIsDraggingSystem={setIsDraggingSystem}
        />

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

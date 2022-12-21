import React, { useState } from "react";
import "./style.css";

import "../System/style.css";
import System from "../System/System";
import Projects from "../Projects/Projects";
import About from "../About/About";

const Icons = () => {
  const [isProject, setIsProject] = useState(false);
  const [isSystem, setIsSystem] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const [isDraggingProject, setIsDraggingProject] = useState({
    status: false,
    zIndex: 100,
  });
  const [isDraggingFile, setIsDraggingFile] = useState({
    status: false,
    zIndex: 100,
  });
  const [isDraggingSystem, setIsDraggingSystem] = useState({
    status: false,
    zIndex: 100,
  });
  const [isDraggingAbout, setIsDraggingAbout] = useState({
    status: false,
    zIndex: 100,
  });

  return (
    <>
      <div className="icons">
        <Projects
          isProject={isProject}
          setIsProject={setIsProject}
          isDraggingProject={isDraggingProject}
          setIsDraggingProject={setIsDraggingProject}
          isDraggingFile={isDraggingFile}
          setIsDraggingFile={setIsDraggingFile}
          isDraggingSystem={isDraggingSystem}
          setIsDraggingSystem={setIsDraggingSystem}
          isDraggingAbout={isDraggingAbout}
          setIsDraggingAbout={setIsDraggingAbout}
        />

        <System
          isDraggingProject={isDraggingProject}
          setIsDraggingProject={setIsDraggingProject}
          isDraggingFile={isDraggingFile}
          setIsDraggingFile={setIsDraggingFile}
          isSystem={isSystem}
          setIsSystem={setIsSystem}
          isDraggingSystem={isDraggingSystem}
          setIsDraggingSystem={setIsDraggingSystem}
          isDraggingAbout={isDraggingAbout}
          setIsDraggingAbout={setIsDraggingAbout}
        />

        <About
          isDraggingProject={isDraggingProject}
          setIsDraggingProject={setIsDraggingProject}
          isDraggingFile={isDraggingFile}
          setIsDraggingFile={setIsDraggingFile}
          isDraggingSystem={isDraggingSystem}
          setIsDraggingSystem={setIsDraggingSystem}
          isAbout={isAbout}
          setIsAbout={setIsAbout}
          isDraggingAbout={isDraggingAbout}
          setIsDraggingAbout={setIsDraggingAbout}
        />

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

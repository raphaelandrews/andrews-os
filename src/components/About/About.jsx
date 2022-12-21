/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import "./style.css";
import Draggable from "react-draggable";

import foto from "../../assets/img/foto-raphael.png";


const About = ({
  isDraggingProject,
  setIsDraggingProject,
  isDraggingFile,
  setIsDraggingFile,
  isDraggingSystem,
  setIsDraggingSystem,
  isAbout,
  setIsAbout,
  isDraggingAbout,
  setIsDraggingAbout,
}) => {
  const [isImg, setIsImg] = useState("/src/assets/img/foto-1.png");

  const setChange = (changeImg) => {
    setIsImg(changeImg);
  };

  const handleAbout = () => {
    setIsAbout((current) => !current);
    dragAbout();
    console.log("Olá");
  };

  const dragAbout = () => {
    setIsDraggingProject({
      ...isDraggingProject,
      zIndex: (isDraggingProject.zIndex = 100),
    }),
    setIsDraggingFile({
      ...isDraggingFile,
      zIndex: (isDraggingFile.zIndex = 100),
    }),
      setIsDraggingSystem({
        ...isDraggingSystem,
        status: true,
        zIndex: (isDraggingSystem.zIndex = 100),
      }),
      setIsDraggingAbout({
        ...isDraggingAbout,
        zIndex: (isDraggingAbout.zIndex = 101),
      });
  };

  return (
    <>
      <div className="icon__file cybr-btn" onClick={(e) => handleAbout()}>
        <i className="bx bx-user icon__img"></i>
        <div className="icon__text cybr-btn">About</div>
        <span className="cybr-btn__glitch">
          <i className="bx bx-user icon__img"></i>
          <div className="icon__text">About</div>
        </span>
      </div>

      {isAbout && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
          onStart={() => dragAbout()}
          onStop={() =>
            setIsDraggingAbout({ ...isDraggingAbout, status: false })
          }
        >
          <div
            className={`draggable-block-container system`}
            style={{
              zIndex: isDraggingAbout.zIndex,
            }}
          >
            <div className="system__wrapper">
              <div className="system__container">
                <div className="system__header" id="imhandle">
                  <div className="buttons" onClick={handleAbout}>
                    <div className="top__buttons">
                      <div className="button"></div>
                      <div className="button"></div>
                    </div>
                    <div className="button"></div>
                  </div>
                </div>
                <div className="system__box">
                  <h2 className="system__title">Andrews OS</h2>
                  {/*<div className="system__border">
                    <div className="system__handle">
                      <img src={foto} alt="" className="system__photo" />
                    </div>
                  </div>*/}

                  {/*<div className="gallery">
                  <figure className="gallery__main">
          <img className="gallery__img" id="mainImg" src={isImg} />
                  </figure>

                  <ul className="gallery__list">
                    <li className="gallery__item">
                      <img
                        id="thumb1"
                        src={interactiveRating}
                        onClick={() =>
                          setChange("/src/assets/img/foto-1.png")
                        }
                      />
                    </li>
                    <li className="gallery__item">
                      <img
                        id="thumb2"
                        src={nftCard}
                        onClick={() => setChange("/src/assets/img/foto-2.png")}
                      />
                    </li>
                    <li className="gallery__item">
                      <img
                        id="thumb3"
                        src={orderSummary}
                        onClick={() => setChange("/src/assets/img/foto-3.png")}
                      />
                    </li>
                  </ul>
                </div>*/}

                  <div className="system__content">            
                    {/*<h3 className="system__text">
                      Location: <span className="system__span">Aracaju/SE</span>
                    </h3>
                    <h3 className="system__text">
                      Role: <span className="system__span">Web Developer</span>
                    </h3>
                    <h3 className="system__text">
                      Description:{" "}
                      <span className="system__span">Lorem ipsum dolor</span>
                    </h3>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default About;
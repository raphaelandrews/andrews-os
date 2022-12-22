/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import "./style.css";
import Draggable from "react-draggable";
import Gallery from "../Gallery/Gallery";
import logo from "../../assets/img/logo-andrews.svg";
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
            className={`draggable-block-container about`}
            style={{
              zIndex: isDraggingAbout.zIndex,
            }}
          >
            <div className="about__wrapper">
              <div className="about__container">
                <div className="about__header" id="imhandle">
                <img src={logo} alt="" className="about__logo" />
                  <span className="about__mini">raphaelandrews</span>
                  <div className="buttons" onClick={handleAbout}>
                    <div className="top__buttons">
                      <div className="button"></div>
                      <div className="button"></div>
                    </div>
                    <div className="button"></div>
                  </div>
                </div>
                <div className="about__box">
                  <div className="about__border">
                    <img
                      src={foto}
                      alt="Raphael Andrews"
                      className="about__perfil"
                    />
                  </div>

                  <div className="about__name">
                    <h2 className="about__title">Raphael<br className="about__br" /> Andrews</h2>
                    <span className="about__slash">|</span>
                    <h2 className="about__subtitle">Frontend<br className="about__br" /> Developer</h2>
                  </div>

                  <p className="about__text">
                    &#x1F44B; Hello, I'm Raphael and I like to build creative
                    things on the internet.
                  </p>

                  <div className="about__btns">
                    <a href="" className="about__btn">
                      Info
                    </a>
                    <a href="" className="about__btn">
                      Download CV
                    </a>
                    <a href="" className="about__btn">
                      Contact
                    </a>
                  </div>

                    <div className="about__socials">
                      <a href="" className="about__social"></a>
                      <a href="" className="about__social"></a>
                      <a href="" className="about__social"></a>
                      <a href="" className="about__social"></a>
                      <a href="" className="about__social"></a>
                    </div>

                  <div className="about__divider"></div>

                  <Gallery />

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
                          onClick={() =>
                            setChange("/src/assets/img/foto-2.png")
                          }
                        />
                      </li>
                      <li className="gallery__item">
                        <img
                          id="thumb3"
                          src={orderSummary}
                          onClick={() =>
                            setChange("/src/assets/img/foto-3.png")
                          }
                        />
                      </li>
                    </ul>
                        </div>*/}
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

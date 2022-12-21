import React, { useState } from "react";
import "./style.css";
import "../Icons/style.css";
import Draggable from "react-draggable";

import logo from "../../assets/img/logo-andrews.svg";
import statsCard from "../../assets/img/stats-preview-card.png";
import nftCard from "../../assets/img/nft-card.png";
import interactiveRating from "../../assets/img/interactive-rating.png";
import cardComponent from "../../assets/img/profile-card-component.png";
import orderSummary from "../../assets/img/order-summary.png";
import qrCode from "../../assets/img/qr-code.png";
import FileOne from "../Files/FileOne";
import FileTwo from "../Files/FileTwo";
import FileThree from "../Files/FileThree";
import FileFour from "../Files/FileFour";
import FileFive from "../Files/FileFive";
import FileSix from "../Files/FileSix";

const Projects = ({
  isProject,
  setIsProject,
  isDraggingProject,
  setIsDraggingProject,
  isDraggingFile,
  setIsDraggingFile,
  isDraggingSystem,
  setIsDraggingSystem,
  isDraggingAbout,
  setIsDraggingAbout,
}) => {
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [isFileBox, setIsFileBox] = useState(<FileOne />);
  const [isPath, setIsPath] = useState("Stats Preview Card");
  const [isImg, setIsImg] = useState("/src/assets/img/interactive-rating.png");

  const setChange = (changeFile) => {
    setIsFileBox(changeFile);
    setIsFileOpen(true);
  };

  const setPath = (changePath) => {
    setIsPath(changePath);
  };

  const handleFileOpen = () => {
    setIsFileOpen(false);
  };

  const handleProject = () => {
    setIsProject((current) => !current);
    dragProject();
  };

  const dragProject = () => {
    setIsDraggingProject({
      ...isDraggingProject,
      status: true,
      zIndex: (isDraggingProject.zIndex = 101),
    }),
    setIsDraggingFile({
      ...isDraggingFile,
      zIndex: (isDraggingFile.zIndex = 100),
    }),
      setIsDraggingSystem({
        ...isDraggingSystem,
        zIndex: (isDraggingSystem.zIndex = 99),
      }),
      setIsDraggingAbout({
        ...isDraggingAbout,
        zIndex: (isDraggingAbout.zIndex = 99),
      });
  };

  const dragFile = () => {
    setIsDraggingProject({
      ...isDraggingProject,
      zIndex: (isDraggingProject.zIndex = 100),
    }),
      setIsDraggingFile({
        ...isDraggingFile,
        status: true,
        zIndex: (isDraggingFile.zIndex = 101),
      }),
      setIsDraggingSystem({
        ...isDraggingSystem,
        zIndex: (isDraggingSystem.zIndex = 99),
      }),
      setIsDraggingAbout({
        ...isDraggingAbout,
        zIndex: (isDraggingAbout.zIndex = 99),
      });
  };

  return (
    <>
      <div className="icon__file cybr-btn" onClick={(e) => handleProject()}>
        <i className="bx bx-folder icon__img"></i>
        <div className="icon__text">Projects</div>
        <span className="cybr-btn__glitch">
          <i className="bx bx-folder icon__img"></i>
          <div className="icon__text">Projects</div>
        </span>
      </div>

      {isProject && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
          onStart={() => dragProject()}
          onStop={() =>
            setIsDraggingProject({ ...isDraggingProject, status: false })
          }
        >
          <div
            className={`draggable-block-container projects`}
            style={{
              zIndex: isDraggingProject.zIndex,
            }}
          >
            <div className="projects__wrapper">
              <div className="projects__header" id="imhandle">
                <img src={logo} alt="" className="projects__logo" />

                <div className="projects__path">
                  <span className="path__icon">&#127760;</span>
                  <span className="path__name">www.andrews.dev\projects</span>
                </div>

                <div className="buttons" onClick={(e) => handleProject()}>
                  <div className="top__buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="button"></div>
                </div>
              </div>
              <div className="projects__container">
                <div className="projects__box">
                  <h2 className="projects__title">Projects</h2>
                  <h3 className="projects__top">
                    &#128293; Hi, here you can check my latest projects
                    &#128293;
                  </h3>
                  <div className="projects__files">
                    <div className="projects__folder cybr-btn">
                      <img
                        src={statsCard}
                        className="projects__preview"
                        onClick={(e) => {
                          setChange(<FileOne />), setPath("Stats Preview Card"), dragFile()
                        }}
                      />
                      <h3 className="projects__text">Stats Preview Card</h3>
                      <span className="cybr-btn__glitch">
                        <img src={statsCard} className="projects__preview" />
                        <h3 className="projects__text">Stats Preview Card</h3>
                      </span>
                    </div>

                    <div className="projects__folder cybr-btn">
                      <img
                        src={nftCard}
                        className="projects__preview"
                        onClick={(e) => {
                          setChange(<FileTwo />), setPath("NFT Card"), dragFile()
                        }}
                      />
                      <h3 className="projects__text">NFT Card</h3>
                      <span className="cybr-btn__glitch">
                        <img src={nftCard} className="projects__preview" />
                        <h3 className="projects__text">NFT Card</h3>
                      </span>
                    </div>

                    <div className="projects__folder cybr-btn">
                      <img
                        src={interactiveRating}
                        className="projects__preview"
                        onClick={(e) => {setChange(<FileThree />), setPath("Interactive Rating"), dragFile()
                      }}
                      />
                      <h3 className="projects__text">Interactive Rating</h3>
                      <span className="cybr-btn__glitch">
                        <img
                          src={interactiveRating}
                          className="projects__preview"
                        />
                        <h3 className="projects__text">Interactive Rating</h3>
                      </span>
                    </div>

                    <div className="projects__folder cybr-btn">
                      <img
                        src={cardComponent}
                        className="projects__preview"
                        onClick={(e) => {setChange(<FileFour />), setPath("Card Component"), dragFile()
                      }}
                      />
                      <h3 className="projects__text">Card Component</h3>
                      <span className="cybr-btn__glitch">
                        <img
                          src={cardComponent}
                          className="projects__preview"
                        />
                        <h3 className="projects__text">Card Component</h3>
                      </span>
                    </div>

                    <div className="projects__folder cybr-btn">
                      <img
                        src={orderSummary}
                        className="projects__preview"
                        onClick={(e) => {setChange(<FileFive />), setPath("Order Summary"), dragFile()
                      }}
                      />
                      <h3 className="projects__text">Order Summary</h3>
                      <span className="cybr-btn__glitch">
                        <img src={orderSummary} className="projects__preview" />
                        <h3 className="projects__text">Order Summary</h3>
                      </span>
                    </div>

                    <div className="projects__folder cybr-btn">
                      <img
                        src={qrCode}
                        className="projects__preview"
                        onClick={(e) => {setChange(<FileSix />), setPath("QR Code"), dragFile()
                      }}
                      />
                      <h3 className="projects__text">QR Code</h3>
                      <span className="cybr-btn__glitch">
                        <img src={qrCode} className="projects__preview" />
                        <h3 className="projects__text">QR Code</h3>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}

      {isFileOpen && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
          onStart={() => dragFile()}
          onStop={() => setIsDraggingFile({ ...isDraggingFile, status: false })}
        >
          <div
            className={`draggable-block-container file-1`}
            style={{
              zIndex: isDraggingFile.zIndex,
            }}
          >
            <div className="file__wrapper">
              <div className="projects__header" id="imhandle">
                <img src={logo} alt="" className="projects__logo" />

                <span className="path__name">{isPath}</span>

                <div className="buttons" onClick={(e) => handleFileOpen()}>
                  <div className="top__buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="button"></div>
                </div>
              </div>
              {isFileBox}
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Projects;

import React, { useState } from "react";
import "./style.css";
import "../Icons/style.css";
import Draggable from "react-draggable";

import logo from "../../assets/img/logo-andrews.svg";
import sun from "../../assets/img/sun.png";
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
  isOpen,
  setIsOpen,
  isFileOne,
  setIsFileOne,
  isFileTwo,
  setIsFileTwo,
  isFileThree,
  setIsFileThree,
  isFileFour,
  setIsFileFour,
  isFileFive,
  setIsFileFive,
  isFileSix,
  setIsFileSix,
}) => {
  const [isProj, setProj] = useState("/src/assets/img/foto-1.png");
  const [isImg, setIsImg] = useState("/src/assets/img/interactive-rating.png");

  const setChange = (changeImg) => {
    setProj(changeImg);
  };

  const handleOpen = () => {
    setIsOpen((current) => !current);
    dragFileOpen();
  };

  const dragFileOpen = () => {
    setIsDragging({
      ...isDragging,
      status: true,
      zIndex: (isDragging.zIndex = 101),
    }),
      setIsDraggingOne({
        ...isDraggingOne,
        zIndex: (isDraggingOne.zIndex = 100),
      }),
      setIsDraggingTwo({
        ...isDraggingTwo,
        zIndex: (isDraggingTwo.zIndex = 100),
      }),
      setIsDraggingThree({
        ...isDraggingThree,
        zIndex: (isDraggingThree.zIndex = 100),
      }),
      setIsDraggingFour({
        ...isDraggingFour,
        zIndex: (isDraggingFour.zIndex = 100),
      }),
      setIsDraggingFive({
        ...isDraggingFive,
        zIndex: (isDraggingFive.zIndex = 100),
      }),
      setIsDraggingSix({
        ...isDraggingSix,
        zIndex: (isDraggingSix.zIndex = 100),
      });
  };

  const handleFileOne = () => {
    setIsFileOne((current) => !current);
    dragFileOne();
  };

  const dragFileOne = () => {
    setIsDragging({ ...isDragging, zIndex: (isDragging.zIndex = 100) }),
      setIsDraggingOne({
        ...isDraggingOne,
        status: true,
        zIndex: (isDraggingOne.zIndex = 101),
      });
    setIsDraggingTwo({
      ...isDraggingTwo,
      zIndex: (isDraggingTwo.zIndex = 100),
    }),
      setIsDraggingThree({
        ...isDraggingThree,
        zIndex: (isDraggingThree.zIndex = 100),
      }),
      setIsDraggingFour({
        ...isDraggingFour,
        zIndex: (isDraggingFour.zIndex = 100),
      }),
      setIsDraggingFive({
        ...isDraggingFive,
        zIndex: (isDraggingFive.zIndex = 100),
      }),
      setIsDraggingSix({
        ...isDraggingSix,
        zIndex: (isDraggingSix.zIndex = 100),
      });
  };

  const handleFileTwo = () => {
    setIsFileTwo((current) => !current);
    dragFileTwo();
  };

  const dragFileTwo = () => {
    setIsDragging({ ...isDragging, zIndex: (isDragging.zIndex = 100) }),
      setIsDraggingOne({
        ...isDraggingOne,
        zIndex: (isDraggingOne.zIndex = 100),
      }),
      setIsDraggingTwo({
        ...isDraggingTwo,
        status: true,
        zIndex: (isDraggingTwo.zIndex = 101),
      }),
      setIsDraggingThree({
        ...isDraggingThree,
        zIndex: (isDraggingThree.zIndex = 100),
      }),
      setIsDraggingFour({
        ...isDraggingFour,
        zIndex: (isDraggingFour.zIndex = 100),
      }),
      setIsDraggingFive({
        ...isDraggingFive,
        zIndex: (isDraggingFive.zIndex = 100),
      }),
      setIsDraggingSix({
        ...isDraggingSix,
        zIndex: (isDraggingSix.zIndex = 100),
      });
  };

  const handleFileThree = () => {
    setIsFileThree((current) => !current);
    dragFileThree();
  };

  const dragFileThree = () => {
    setIsDragging({ ...isDragging, zIndex: (isDragging.zIndex = 100) }),
      setIsDraggingOne({
        ...isDraggingOne,
        zIndex: (isDraggingOne.zIndex = 100),
      }),
      setIsDraggingTwo({
        ...isDraggingTwo,
        zIndex: (isDraggingTwo.zIndex = 100),
      }),
      setIsDraggingThree({
        ...isDraggingThree,
        status: true,
        zIndex: (isDraggingThree.zIndex = 101),
      }),
      setIsDraggingFour({
        ...isDraggingFour,
        zIndex: (isDraggingFour.zIndex = 100),
      }),
      setIsDraggingFive({
        ...isDraggingFive,
        zIndex: (isDraggingFive.zIndex = 100),
      }),
      setIsDraggingSix({
        ...isDraggingSix,
        zIndex: (isDraggingSix.zIndex = 100),
      });
  };

  const handleFileFour = () => {
    setIsFileFour((current) => !current);
    dragFileFour();
  };

  const dragFileFour = () => {
    setIsDragging({ ...isDragging, zIndex: (isDragging.zIndex = 100) }),
      setIsDraggingOne({
        ...isDraggingOne,
        zIndex: (isDraggingOne.zIndex = 100),
      }),
      setIsDraggingTwo({
        ...isDraggingTwo,
        zIndex: (isDraggingTwo.zIndex = 100),
      }),
      setIsDraggingThree({
        ...isDraggingThree,
        zIndex: (isDraggingThree.zIndex = 100),
      }),
      setIsDraggingFour({
        ...isDraggingFour,
        status: true,
        zIndex: (isDraggingFour.zIndex = 101),
      }),
      setIsDraggingFive({
        ...isDraggingFive,
        zIndex: (isDraggingFive.zIndex = 100),
      }),
      setIsDraggingSix({
        ...isDraggingSix,
        zIndex: (isDraggingSix.zIndex = 100),
      });
  };

  const handleFileFive = () => {
    setIsFileFive((current) => !current);
    dragFileFive();
  };

  const dragFileFive = () => {
    setIsDragging({ ...isDragging, zIndex: (isDragging.zIndex = 100) }),
      setIsDraggingOne({
        ...isDraggingOne,
        zIndex: (isDraggingOne.zIndex = 100),
      }),
      setIsDraggingTwo({
        ...isDraggingTwo,
        zIndex: (isDraggingTwo.zIndex = 100),
      }),
      setIsDraggingThree({
        ...isDraggingThree,
        zIndex: (isDraggingThree.zIndex = 100),
      }),
      setIsDraggingFour({
        ...isDraggingFour,
        zIndex: (isDraggingFour.zIndex = 100),
      }),
      setIsDraggingFive({
        ...isDraggingFive,
        status: true,
        zIndex: (isDraggingFive.zIndex = 101),
      }),
      setIsDraggingSix({
        ...isDraggingSix,
        zIndex: (isDraggingSix.zIndex = 100),
      });
  };

  const handleFileSix = () => {
    setIsFileSix((current) => !current);
    dragFileSix();
  };

  const dragFileSix = () => {
    setIsDragging({ ...isDragging, zIndex: (isDragging.zIndex = 100) }),
      setIsDraggingOne({
        ...isDraggingOne,
        zIndex: (isDraggingOne.zIndex = 100),
      }),
      setIsDraggingTwo({
        ...isDraggingTwo,
        zIndex: (isDraggingTwo.zIndex = 100),
      }),
      setIsDraggingThree({
        ...isDraggingThree,
        zIndex: (isDraggingThree.zIndex = 100),
      }),
      setIsDraggingFour({
        ...isDraggingFour,
        zIndex: (isDraggingFour.zIndex = 100),
      }),
      setIsDraggingFive({
        ...isDraggingFive,
        zIndex: (isDraggingFive.zIndex = 100),
      }),
      setIsDraggingSix({
        ...isDraggingSix,
        status: true,
        zIndex: (isDraggingSix.zIndex = 101),
      });
  };

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

  return (
    <>
      <div className="icon__file cybr-btn" onClick={(e) => handleOpen()}>
        <i className="bx bx-folder icon__img"></i>
        <div className="icon__text">Projects</div>
        <span className="cybr-btn__glitch">
          <i className="bx bx-folder icon__img"></i>
          <div className="icon__text">Projects</div>
        </span>
      </div>

      {isOpen && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
          onStart={() => dragFileOpen()}
          onStop={() => setIsDragging({ ...isDragging, status: false })}
        >
          <div
            className={`draggable-block-container projects`}
            style={{
              zIndex: isDragging.zIndex,
            }}
          >
            <div className="projects__wrapper">
              <div className="projects__header" id="imhandle">
                <img src={logo} alt="" className="projects__logo" />

                <div className="projects__path">
                  <span className="path__icon">&#127760;</span>
                  <span className="path__name">www.andrews.dev\projects</span>
                </div>

                <div className="buttons" onClick={(e) => handleOpen()}>
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
                        onClick={(e) => handleFileOne()}
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
                        onClick={(e) => handleFileTwo()}
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
                        onClick={(e) => handleFileThree()}
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
                        onClick={(e) => handleFileFour()}
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
                        onClick={(e) => handleFileFive()}
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
                        onClick={(e) => handleFileSix()}
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

      {isFileOne && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
          onStart={() => dragFileOne()}
          onStop={() => setIsDraggingOne({ ...isDraggingOne, status: false })}
        >
          <div
            className={`draggable-block-container file-1`}
            style={{
              zIndex: isDraggingOne.zIndex,
            }}
          >
            <div className="file__wrapper">
              <div className="projects__header" id="imhandle">
                <img src={logo} alt="" className="projects__logo" />

                <span className="path__name">Stats Preview Card</span>

                <div className="buttons" onClick={(e) => handleFileOne()}>
                  <div className="top__buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="button"></div>
                </div>
              </div>
              <FileOne />
            </div>
          </div>
        </Draggable>
      )}

      {isFileTwo && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
          onStart={() => dragFileTwo()}
          onStop={() => setIsDraggingTwo({ ...isDraggingTwo, status: false })}
        >
          <div
            className={`draggable-block-container file-1`}
            style={{
              zIndex: isDraggingTwo.zIndex,
            }}
          >
            <div className="file__wrapper">
              <div className="projects__header" id="imhandle">
                <img src={logo} alt="" className="projects__logo" />

                <span className="path__name">Stats Preview Card</span>

                <div className="buttons" onClick={(e) => handleFileTwo()}>
                  <div className="top__buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="button"></div>
                </div>
              </div>
              <FileTwo />
            </div>
          </div>
        </Draggable>
      )}

      {isFileThree && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
          onStart={() => dragFileThree()}
          onStop={() =>
            setIsDraggingThree({ ...isDraggingThree, status: false })
          }
        >
          <div
            className={`draggable-block-container file-1`}
            style={{
              zIndex: isDraggingThree.zIndex,
            }}
          >
            <div className="file__wrapper">
              <div className="projects__header" id="imhandle">
                <img src={logo} alt="" className="projects__logo" />

                <span className="path__name">Stats Preview Card</span>

                <div className="buttons" onClick={(e) => handleFileThree()}>
                  <div className="top__buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="button"></div>
                </div>
              </div>
              <FileThree />
            </div>
          </div>
        </Draggable>
      )}

      {isFileFour && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
          onStart={() => dragFileFour()}
          onStop={() => setIsDraggingFour({ ...isDraggingFour, status: false })}
        >
          <div
            className={`draggable-block-container file-1`}
            style={{
              zIndex: isDraggingFour.zIndex,
            }}
          >
            <div className="file__wrapper">
              <div className="projects__header" id="imhandle">
                <img src={logo} alt="" className="projects__logo" />

                <span className="path__name">Stats Preview Card</span>

                <div className="buttons" onClick={(e) => handleFileFour()}>
                  <div className="top__buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="button"></div>
                </div>
              </div>
              <FileFour />
            </div>
          </div>
        </Draggable>
      )}

      {isFileFive && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
          onStart={() => dragFileFive()}
          onStop={() => setIsDraggingFive({ ...isDraggingFive, status: false })}
        >
          <div
            className={`draggable-block-container file-1`}
            style={{
              zIndex: isDraggingFive.zIndex,
            }}
          >
            <div className="file__wrapper">
              <div className="projects__header" id="imhandle">
                <img src={logo} alt="" className="projects__logo" />

                <span className="path__name">Stats Preview Card</span>

                <div className="buttons" onClick={(e) => handleFileFive()}>
                  <div className="top__buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="button"></div>
                </div>
              </div>
              <FileFive />
            </div>
          </div>
        </Draggable>
      )}

      {isFileSix && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
          onStart={() => dragFileSix()}
          onStop={() => setIsDraggingSix({ ...isDraggingSix, status: false })}
        >
          <div
            className={`draggable-block-container file-1`}
            style={{
              zIndex: isDraggingSix.zIndex,
            }}
          >
            <div className="file__wrapper">
              <div className="projects__header" id="imhandle">
                <img src={logo} alt="" className="projects__logo" />

                <span className="path__name">Stats Preview Card</span>

                <div className="buttons" onClick={(e) => handleFileSix()}>
                  <div className="top__buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="button"></div>
                </div>
              </div>
              <FileSix />
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Projects;

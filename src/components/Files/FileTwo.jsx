import './style.css'
import nftCard from "../../assets/img/nft-card.png";

const FileTwo = () => {
  return (
    <div className="file__box">
      <img src={nftCard} alt="" className="file__img" />
      <div className="file__content">
        <h2 className="file__title">NFT Card</h2>
        <p className="file__text">
          Challenge from <a href='https://www.frontendmentor.io' className='file__redirect' target="_blank">Frontendmentor.io</a> - NFT Card
        </p>
        <div className='file__links'>
          <div className='cybr-btn'>
            <a href="https://raphaelandrews.github.io/NFT-Card/" className='file__link' target="_blank" >Live Preview</a>
            <span className='cybr-btn__glitch'>
              <a href="" className='file__link'>Live Preview</a>
            </span>
          </div>
          <div className='cybr-btn'>
            <a href="https://github.com/raphaelandrews/NFT-Card" className='file__link' target="_blank">Source Code</a>
            <span className='cybr-btn__glitch'>
              <a href="" className='file__link'>Source Code</a>
            </span>
          </div>
        </div>
        <div className='file__techs'>
          <span className='file__tech'>#HTML</span>
          <span className='file__tech'>#CSS</span>
        </div>
      </div>
    </div>
  );
}

export default FileTwo;

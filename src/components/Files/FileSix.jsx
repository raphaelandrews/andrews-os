import './style.css'
import qrCode from "../../assets/img/qr-code.png";

const FileSix = () => {
  return (
    <div className="file__box">
      <img src={qrCode} alt="" className="file__img" />
      <div className="file__content">
        <h2 className="file__title">QR Code</h2>
        <p className="file__text">
          Challenge from <a href='https://www.frontendmentor.io' className='file__redirect' target="_blank">Frontendmentor.io</a> - QR Code
        </p>
        <div className='file__links'>
          <div className='cybr-btn'>
            <a href="https://raphaelandrews.github.io/QR-Code/" className='file__link' target="_blank" >Live Preview</a>
            <span className='cybr-btn__glitch'>
              <a href="" className='file__link'>Live Preview</a>
            </span>
          </div>
          <div className='cybr-btn'>
            <a href="https://github.com/raphaelandrews/QR-Code" className='file__link' target="_blank">Source Code</a>
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

export default FileSix;

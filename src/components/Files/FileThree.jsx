import './style.css'
import interactiveRating from "../../assets/img/interactive-rating.png";

const FileThree = () => {
  return (
    <div className="file__box">
      <img src={interactiveRating} alt="" className="file__img" />
      <div className="file__content">
        <h2 className="file__title">Interactive Rating</h2>
        <p className="file__text">
          Challenge from <a href='https://www.frontendmentor.io' className='file__redirect' target="_blank">Frontendmentor.io</a> - Interactive Rating
        </p>
        <div className='file__links'>
          <div className='cybr-btn'>
            <a href="https://raphaelandrews.github.io/Interactive-Rating/" className='file__link' target="_blank" >Live Preview</a>
            <span className='cybr-btn__glitch'>
              <a href="" className='file__link'>Live Preview</a>
            </span>
          </div>
          <div className='cybr-btn'>
            <a href="https://github.com/raphaelandrews/Interactive-Rating" className='file__link' target="_blank">Source Code</a>
            <span className='cybr-btn__glitch'>
              <a href="" className='file__link'>Source Code</a>
            </span>
          </div>
        </div>
        <div className='file__techs'>
          <span className='file__tech'>#HTML</span>
          <span className='file__tech'>#CSS</span>
          <span className='file__tech'>#JavaScript</span>
        </div>
      </div>
    </div>
  );
}

export default FileThree;

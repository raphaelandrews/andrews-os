import './style.css'
import cardComponent from "../../assets/img/profile-card-component.png";

const FileFour = () => {
  return (
    <div className="file__box">
      <img src={cardComponent} alt="" className="file__img" />
      <div className="file__content">
        <h2 className="file__title">Profile Card Component</h2>
        <p className="file__text">
          Challenge from <a href='https://www.frontendmentor.io' className='file__redirect' target="_blank">Frontendmentor.io</a> - Profile Card Component
        </p>
        <div className='file__links'>
          <div className='cybr-btn'>
            <a href="https://raphaelandrews.github.io/Profile-Card-Component/" className='file__link' target="_blank" >Live Preview</a>
            <span className='cybr-btn__glitch'>
              <a href="" className='file__link'>Live Preview</a>
            </span>
          </div>
          <div className='cybr-btn'>
            <a href="https://github.com/raphaelandrews/Profile-Card-Component" className='file__link' target="_blank">Source Code</a>
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

export default FileFour;

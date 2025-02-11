import React from 'react';
import "./sidebar.css";
// import ProfilePic from "../../assets/profile-1.jpg";


const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className='nav__logo'>
        {/* <img src={ProfilePic} alt="" className="logo__img" /> */}
      </a>
      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#about" className="nav__link">
                <i className="icon-user"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#experience" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#experience" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2024 - 2025.</span>
      </div>
    </aside>
  )
}

export default Sidebar
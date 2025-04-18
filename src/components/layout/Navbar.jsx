import { useState } from 'react';
import Logo from '../../assets/Views/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Div with increased height and Background Color #0E412B */}
      <div className="bg-[#0E412B] w-full py-8 h-35">
        {/* The navbar content will remain below this colored div */}
      </div>

      {/* Navbar content below the colored background */}
      <nav className="py-6 px-8">
        <div className="nav__bar flex justify-between items-center">
          {/* Left Section for Links */}
          <div className="flex items-center gap-6 ml-8">
            {/* Menu Button */}
            <div
              className="nav__menu__btn md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-2xl text-black"></i>
            </div>
            {/* Links with left margin */}
            <ul
              className={`nav__links ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-8 mt-4 md:mt-0`}
            >
              {/* <li>
                <a href="#home" className="nav-link">Home</a>
              </li> */}
              <li>
                <a href="#explore" className="nav-link">Explore</a>
              </li>
              <li>
                <a href="#about" className="nav-link">About</a>
              </li>
              <li>
                <a href="#service" className="nav-link">Services</a>
              </li>
        
              <li>
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>

          {/* Center Section for Logo */}
          <div className="logo mx-auto">
            <a href="#">
              <img src={Logo} alt="logo" className="h-20" />
            </a>
          </div>

          {/* Right Section for Button */}
          <button className="btn hidden md:block ml-auto mr-8 text-opacity-50">
            Book Now
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

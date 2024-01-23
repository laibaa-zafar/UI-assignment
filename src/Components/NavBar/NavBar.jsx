import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <nav ref={navRef} className="centered-nav">
        
        <div className="menu-items">
          <a href="#" className='home'> Home </a>
          <a href="#" className='contact-us'> Contact Us </a>
          <div className="logo-container">
          <img src="./Images/navlogo.png" alt="" />
        </div>
          <a href="#" className='about-us'> About Us </a>
          <a href="#" className='our-services'> Our Services </a>
        </div>
        <div className="button-container">
          <button className='end-btn'>Become a Ryle</button>
          <button className='nav-btn nav-close-btn' onClick={showNavBar}>
            <FaTimes />
          </button>
        </div>
      </nav>
      <button onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
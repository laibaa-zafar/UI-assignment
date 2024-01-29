import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">My Work</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">About Me</a>
          </li>
        </ul>
        <button
          className="nav-btn nav-close-btn"
          onClick={toggleNavbar}
          aria-label="Close Navigation"
          aria-expanded={isNavOpen}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={toggleNavbar}
        aria-label="Open Navigation"
        aria-expanded={isNavOpen}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
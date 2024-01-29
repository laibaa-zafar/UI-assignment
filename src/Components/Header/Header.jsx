import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      {/* Desktop  */}
      <nav className="nav">
        <a href="/#">Home</a>
        <a href="/#">Contact Us</a>
          <img src="./Images/navlogo.png" alt="" />
        <a href="/#">About Us</a>
        <a href="/#">Our Services</a>
        <div>
        <button className="button-rlye"> Become a Rlye </button>
        </div>
      </nav>

      {/* Mobile  */}
      <nav className={`responsive_nav ${isNavOpen ? "" : "hidden"}`} ref={navRef}>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Display links*/}
        {isNavOpen && (
          <>
            <a href="/#">Home</a>
            <a href="/#">Contact Us</a>
            <a href="/#">About Us</a>
            <a href="/#">Our Services</a>
            <button className="Button-rlye">Become a Ryle</button>
          </>
        )}
      </nav>

      {/* Mobile navigation toggle button */}
      <button className="nav-btn" onClick={toggleNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Header;
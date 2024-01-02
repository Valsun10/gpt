import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const links = (
  <>
    <a href="#home">Home</a>
    <a href="#gpt">What is GPT?</a>
    <a href="#openAI">Open AI</a>
    <a href="#studies">Case Studies</a>
    <a href="#library">Library</a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-links">{links}</div>
      <div className="navbar-signup">
        <a href="#signin">Sign In</a>
        <button>Sign Up</button>
      </div>
      <div className="navbar-small-devices">
        {!toggleMenu ? (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-small-devices-container scale-up-center">
            <div className="navbar-small-devices-links">
              {links}
              <div className="navbar-small-devices-signup">
                <a href="#signin">Sign In</a>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

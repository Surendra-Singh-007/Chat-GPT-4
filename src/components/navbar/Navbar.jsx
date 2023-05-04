import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt4__navbar">
      <div className="gpt4__navbar-links">
        <div className="gpt4__navbar-links_logo">
          {/*<img src={logo} alt="logo" />*/}
          <h2>ChatGPT-4</h2>
        </div>
        <div className="gpt4__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt4">About - GPT</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Chronology</a>
          </p>
          <p>
            <a href="#blog">Blog</a>
          </p>
        </div>
      </div>
      <div className="gpt4__navbar-sign">
        <button>Sign in</button>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt4__navbar-menu">
        {toggleMenu ? 
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
         : 
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        }
        {toggleMenu && (
          <div className="gpt4__navbar-menu_container scale-up-center">
            <div className="gpt4__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt4">About - GPT</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Chronology</a>
              </p>
              <p>
                <a href="#blog">Blog</a>
              </p>
            </div>
            <div className="gpt4__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

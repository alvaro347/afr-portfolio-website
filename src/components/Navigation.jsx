import React, { useEffect, useState } from "react";
import "../css/Navigation.scss";
import logo from "../img/Logo.png";

const Navigation = ({ toggleTheme, isDarkMode }) => {
  // const [isDark, setIsDark] = useState(true);

  // const themeHandler = () => {
  //   if (isDark === false) {
  // 		console.log('Dark Mode On');
  //     setIsDark(true);
  //   } else {
  // 		console.log('Light Mode On');
  //     setIsDark(false);
  //   }
  // };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    // if (showMenu === false) {
    //   document.getElementById("nav-links").style.display = "none";
    // } else {
    //   document.getElementById("nav-links").style.display = "block";

    // }
    // document.getElementById("nav-links").style.display = "block";
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    // document.getElementById("nav-links").style.display = "none";
    // document.getElementsByClassName("show").style.display = "none";
    setShowMenu(false);
  };

  const [prevMenuState, setPrevMenuState] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800 && prevMenuState) {
        setShowMenu(true);
      } else if (window.innerWidth > 800) {
        setShowMenu(false);
      }
    };
    // const handleResize = () => {
    //   if (window.innerHeight > 850) {
    //     setShowMenu(false);
    //   }
    // };
    // handleResize();
    // window.addEventListener('resize', handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [prevMenuState]);

  useEffect(() => {
    setPrevMenuState(showMenu);
  }, [showMenu]);
  return (
    <nav>
      <div id="nav-width">
        <div id="nav-logo">
          <a href="./">
            <img id="logo" src={logo} alt="logo" />
          </a>
        </div>
        <div id="nav-links" className={`${showMenu ? "show" : ""}`}>
          <a href="#projects" className="nav-link" onClick={closeMenu}>
            Projects
          </a>
          <a href="#Skills" className="nav-link" onClick={closeMenu}>
            Skills
          </a>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div id="nav-right">
          <button className="button-theme" onClick={toggleTheme}>
            &#9728;
          </button>
          <a className="icon-search-link" href="#header">
            <button className="button-theme">&#9993;</button>
          </a>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className={`line ${showMenu ? "line-1" : ""}`}></div>
            <div className={`line ${showMenu ? "line-2" : ""}`}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

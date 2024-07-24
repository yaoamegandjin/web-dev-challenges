import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
    const [clicked, isClicked] = useState(false);
    const toggleMenu = () => {
        isClicked(!clicked)
    }
    return (
        <nav>
            <a href="/"><img src="/assets/images/logo.svg" alt="logo"/></a>
            <div>
                <ul id="navbar" className={clicked ? "#navbar active" : "navbar"}>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            New
                        </a>
                    </li>
                    <li className="nav-item">
                        <a  href="/" className="nav-link">
                            Popular
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Trending
                        </a>
                    </li>
                    <li className="nav-item">
                        <a  href="/" className="nav-link">
                            Categories
                        </a>
                    </li>
                </ul>
            </div>
            <div id="mobile" className={clicked ? "close-icon-position" : ""}>
                <img onClick={toggleMenu} src={clicked ? "/assets/images/icon-menu-close.svg" : "/assets/images/icon-menu.svg"} alt="Hamburger Icon"/>
            </div>
        </nav>
        
    );
  }
  
  export default Navbar;
  

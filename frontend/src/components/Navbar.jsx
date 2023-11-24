import React, { useState } from "react";
import images from "../constants/images";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="container flex">
                <div className="brand__and__toggler flex">
                    <a href="/" alt="" className="navbar__brand">
                        <img src={images.logo} alt="site logo" style={{height:'50px', width:'70px'}} />
                    </a>
                    <button type="button" className="navbar__open--btn text__light" onClick={() => setToggleMenu(true)}>
                        <FaBars size={26} />
                    </button>
                </div>

                <div className="navbar__collapse">
                    <ul className="navbar__nav">
                        <li className="nav__item">
                            <a href="/" className="nav__link text__upper fw__6 nav__active text__light">home</a>
                        </li>
                        <li className="nav__item">
                            <a href="/images" className="nav__link text__upper fw__6 text__light">Gallery</a>
                        </li>

                    </ul>
                </div>

                {toggleMenu && (
                    <div className="navbar__smallscreen">
                        <button type="button" className="navbar__close--btn text__light" onClick={() => setToggleMenu(false)}>
                            <FaTimes size={32} />
                        </button>
                        <ul className="navbar__nav--smallscreen text__light">
                            <li className="nav__item">
                                <a href="/" className="nav__link text__upper fw__6 nav__active text__light">home</a>
                            </li>
                            <li className="nav__item">
                                <a href="/images" className="nav__link text__upper fw__6 text__light">Gallery</a>
                            </li>

                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
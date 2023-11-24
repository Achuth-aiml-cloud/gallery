import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import images from "../constants/images";

const Header = () => (
    <div className="header" style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.bg}) center/cover no-repeat`
    }}>
        <Navbar />

        <div className="container">
            <div className="header__content text__center text__light flex flex__center">
                <div className="header__content--left"></div>
                <div className="header__content--right">
                <h1 className="header__title fw__6">BOSS DESIGNER HUB</h1>
                    <h2>Fabric | Ethnic Wear | Tailored to fit</h2>
                    <p className="para__text">Where Tradition Meets Elegance – Discover Your Unique Style with Us.</p>
                    <a href = "/images" className="btn btn__blue">Gallery</a>
                </div>
            </div>
        </div>
    </div>
)

export default Header;
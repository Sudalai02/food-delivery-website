import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
        <img src={assets.logo} alt="logo" className="logo" />
      </ScrollLink>

      <ul className="navbar-menu">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </ScrollLink>

        <ScrollLink
          to="explore-menu"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </ScrollLink>

        <ScrollLink
          to="app-download"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </ScrollLink>

        <ScrollLink
          to="footer"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </ScrollLink>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="basket_icon" />
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
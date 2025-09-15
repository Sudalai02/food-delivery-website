import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo' />

      {/* Desktop Menu */}
      <ul className='navbar-menu desktop'>
      <a href='#home'
            onClick={()=>setMenu("")}
            className={menu==="home"?"active":""}
          >Home</a>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-downlode' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact</a>
      </ul>

      {/* Right side */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)} className="desktop">Sign In</button>

        {/* Hamburger */}
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <a href='#home'
            onClick={()=>setMenu("")}
            className={menu==="home"?"active":""}
          >Home</a>
          <a href='#explore-menu' onClick={handleClose}>Menu</a>
          <a href='#app-downlode' onClick={handleClose}>Mobile App</a>
          <a href='#footer' onClick={handleClose}>Contact</a>
        </ul>
        <button onClick={() => { setShowLogin(true); handleClose(); }}>Sign In</button>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={handleClose}></div>}
    </div>
  )
}

export default Navbar

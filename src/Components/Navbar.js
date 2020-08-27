import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const width = window.innerWidth;
    const inputRef = React.createRef();
    const input2Ref = React.createRef();
    const nav = React.createRef();
    const navMenu = React.createRef();

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () =>{
    if(!showMenu) {
        inputRef.current.classList.add("open");
        input2Ref.current.classList.add("open");
        nav.current.classList.add("open");
        navMenu.current.classList.add("open");
        setShowMenu(true);
  } else {
        inputRef.current.classList.remove("open");
        input2Ref.current.classList.remove("open");
        nav.current.classList.remove("open");
        navMenu.current.classList.remove("open");
        setShowMenu(false);
  }
}
   const navType = (width) => {
   if(width > 600) {
        return (
        <header id="header">
                <div className="icon" data-aos="fade-right">
                     <img src="img/nigeria-flag.png" alt="nigeria-flag" />
                     <div className="header-title">
                         <h4>NTG</h4>
                         <p>Nigeria <span>Tourist</span> Guide</p>
                     </div>
                </div>
                <div className="navbar" data-aos="fade-left">
                    <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/guides">City Guides</Link></li>
                    <li><Link to="/restaurant">Restaurant</Link></li>
                    <li><Link to="/flight">Flight</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
        </header>
    )
} else return (
    <>
     <div className="menu-btn" ref={inputRef} onClick={toggleMenu}>
        <span className="menu-btn-burger" ref={input2Ref}></span>
    </div>
    <div className="icon mobile" data-aos="fade-right">
        <img src="img/nigeria-flag.png" alt="nigeria-flag" />
        <div className="header-title">
            <h4>NTG</h4>
            <p>Nigeria <span>Tourist</span> Guide</p>
        </div>
    </div>
    <header className="mobile-header" ref={nav} data-aos="fade-left">
            <div className="mobile-nav" ref={navMenu}>
            <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/guides">City Guides</Link></li>
                    <li><Link to="/restaurant">Restaurant</Link></li>
                <li><Link to="/flight">Flight</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </div>
        </header>
    </>
)
}


   return navType(width);
}

export default Navbar;
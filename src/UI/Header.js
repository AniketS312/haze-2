import React from "react";

import classes from './Header.module.css'

import { Link } from "react-router-dom";


const Header = () => {
// const menuItems = ['Home', 'About', 'Portfolio', 'Contact']

// const Menu = menuItems.map((item) => <li><a>{item}</a></li>)

return (
    <div className={classes.header}>
        <Link to="/"className={classes.logo}>HAZE</Link>
        <menu className={classes.menu}>
            <nav>
            <Link to="/">Home</Link>
            <Link to="aboutus">About Us</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="contactus">Contact Us</Link>    
            </nav>
        </menu>
    </div>
)};




export default Header;
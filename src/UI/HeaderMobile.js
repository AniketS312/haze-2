import React, { useState } from "react";

import ReactDOM from "react-dom";

import classes from './HeaderMobile.module.css'

import { Link } from "react-router-dom";


// Mobile menu. using Use state to toggle menu on and off
const HeaderModule = () => {
    const [triggerModal, setTriggerModal ] = useState(false)

    const toggleMenuFunction = function() {
        setTriggerModal(state => !state);
    }
    
    return (
        <div className={classes.header}>
            <Link to="/" className={classes.logo}>
                HAZE
            </Link>
            <menu className={classes.menu}>
                <MenuIcon toggle={toggleMenuFunction}
                menuClass={classes.hamburgermenu}
                id='hamburgermenu'
                />
            </menu>  
           <Nav triggerModal={triggerModal} exit={toggleMenuFunction} />
        </div>
    ); 
}

const Nav = (props) => {
    if(!props.triggerModal) return null;

     return ReactDOM.createPortal(
            <nav className={classes.mobilenav}>
            <Exit exit={props.exit} />
             <div>
                <span className={classes.exit}></span>
                <Link onClick={props.exit} to="/">Home</Link>
                <Link onClick={props.exit} to="aboutus">About Us</Link>
                <Link onClick={props.exit} to="portfolio">Portfolio</Link>
                <Link onClick={props.exit} to="contactus">Contact Us</Link>  
            </div>
        </nav>, document.getElementById('menu-modal')
        )
}

// Icons for menu
   const MenuIcon = (props) => {   
        return (
            <button id={props.id} className={props.menuClass} onClick={props.toggle}>
                <svg   width="25" fill="rgb(151,126,79)" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                <path d="M1 6C1 5.44772 1.44772 5 2 5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H2C1.44772 7 1 6.55228 1 6Z" clipRule="evenodd" fillRule="evenodd" undefined="1"></path>
                <path d="M1 12C1 11.4477 1.44772 11 2 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H2C1.44772 13 1 12.5523 1 12Z" clipRule="evenodd" fillRule="evenodd" undefined="1"></path>
                <path d="M1 18C1 17.4477 1.44772 17 2 17H8C8.55228 17 9 17.4477 9 18C9 18.5523 8.55228 19 8 19H2C1.44772 19 1 18.5523 1 18Z" clipRule="evenodd" fillRule="evenodd" undefined="1"></path>
                </svg> 
            </button>        
        )
    }


    const Exit = (props) => {
        return(
            <svg onClick={props.exit}className={classes.exit} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
                <path d="M22.7071 1.29289C23.0976 1.68342 23.0976 2.31658 22.7071 2.70711L2.70711 22.7071C2.31658 23.0976 1.68342 23.0976 1.29289 22.7071C0.902369 22.3166 0.902369 21.6834 1.29289 21.2929L21.2929 1.29289C21.6834 0.902369 22.3166 0.902369 22.7071 1.29289Z" clipRule="evenodd" fill-rule="evenodd" undefined="1"></path>
                <path d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z" clipRule="evenodd" fill-rule="evenodd" undefined="1"></path>
            </svg>
        )
    }
export default HeaderModule;
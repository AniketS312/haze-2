import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa'

import classes from './Footer.module.css'

// Making social media icons into an array to be used by the map function
const socialIcons = [ 
    { icon: <FaFacebookF />, link: 'https://www.facebook.com', id: 1},
    { icon: <FaTwitter/>, link: 'https://www.twitter.com', id: 2},
    { icon: <FaInstagram />, link: 'https://www.instagram.com', id: 3},
    { icon: <FaPinterestP />, link: 'https://wwww.pinterest.com', id: 4},
    ]

const Footer = () => {
const footerSocial = socialIcons.map((icon) => <li key={icon.id}><a target="_blank" rel="noreferrer" href={icon.link}>{icon.icon}</a></li>)
    return (
        <footer className={classes.footer}>
            <div>Copyright claim</div>
                <ul>{footerSocial}</ul>
        </footer>
    );
};

export default Footer;
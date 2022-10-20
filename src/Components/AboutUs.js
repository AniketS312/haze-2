import React from "react";

import BreadCrumb from "../UI/BreadCrumb";

import classes from './AboutUs.module.css'

import AboutUsImg from '../Assets/about-us.jpg'
import Haze from '../Assets/Haze.jpg'
import QuoteImg from '../Assets/quote-image.jpg'

import LogoOne from '../Assets/logo/Symbol-14.svg'
import LogoTwo from '../Assets/logo/Symbol-15.svg'
import LogoThree from '../Assets/logo/Symbol-16.svg'
import LogoFour from '../Assets/logo/Symbol-17.svg'
import LogoFive from '../Assets/logo/Symbol-18.svg'




const WhoIAm = (props) => {
    return (
    <section className={classes.whoiam}>
        <h2>Hi, My name is Haze Ellinger. I'm a photographer based in Edmonton, Alberta. And I want to help</h2>
        <div className={classes.textcontent}>
            <img src={props.MyImg} alt="Haze the photographer" />
            <div>
                <h3>Who I Am</h3>
                <p>Donec mattis consequat pharetra. Pellentesque egestas turpis eget mauris elementum mollis. Nulla interdum semper est, eget aliquet nulla varius hendrerit. Fusce quis massa a sem semper ultrices. Aliquam imperdiet sapien quis arcu ornare ultrices convallis mauris eleifend. Curabitur placerat orci at justo euismod ac dapibus augue mattis. Phasellus mattis, diam sit amet sodales aliquet, urna lectus iaculis felis, ac rhoncus arcu turpis placerat risus.</p>
                <p>Aenean scelerisque rhoncus metus, at sagittis mi sodales eget. Aenean adipiscing adipiscing magna, eu imperdiet risus aliquet at. Fusce iaculis, metus nec mollis ultricies, metus erat elementum dolor, in tincidunt lectus nibh eu turpis. Nulla facilisi.</p>
                <p>"Life is like a camera. Just focus on what's important and capture the good times, develop from the negatives and if things don’t work out, just take another shot."</p>
            </div>
        </div>
    </section>
    )
}

const MappedClients = () => {
const logoArray= [LogoOne, LogoTwo, LogoThree, LogoFour, LogoFive];
const MapLogoArray= logoArray.map((logo) => <a href="https://www.google.com" target="noreferrer"><img src={logo} alt="company we ahve helped"/></a>) 

    return (
        <>{MapLogoArray}</>
    )
}

const Clients = () => {
    return (
        <section className={classes.client}>
            <h3>My Clients</h3>
            <p>Donec mattis consequat pharetra. Pellentesque egestas turpis eget mauris elementum mollis. Nulla interdum semper est, eget aliquet nulla varius hendrerit. Fusce quis massa a sem semper ultrices.</p>
            <div>
                <MappedClients />
            </div>
        </section>
    )
}

const Quote = () => {
    return (
        <section className={classes.quote}>
            <div className={classes.quotetext}>
                <h3>Quote</h3>
                <span>"Life is like a camera. Just focus on what's important and capture the good times, develop from the negatives and if things don't work out, just take another shot."</span>
                <div className={classes.author}>
                    <h4>-John Donovan</h4>
                    <p>Cinematography Discovery</p>
                </div>
            </div>
            <img src={QuoteImg} alt="John Donovan"></img>
        </section>
    )
}

const AboutUs = () => {
    return (
        <>
            <BreadCrumb
            img={AboutUsImg}
            imgAlt='Photographer taking a nice photo of the mountains' 
            pageTitle='About Us'
            crumb='Home / About Us'
            />
            <WhoIAm 
            MyImg={Haze} 
            />
            <Clients />
            <Quote />
        </>
    )
}




export default AboutUs;
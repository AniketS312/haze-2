import React, { useState } from "react";

import BreadCrumb from "../UI/BreadCrumb";

import PortfolioImg from '../Assets/portfolio.jpg'
import data from "./PortfolioData";

import classes from './Portfolio.module.css';

import ImageOne from '../Assets/PortfolioImages/event-1.jpg'
import ImageTwo from '../Assets/PortfolioImages/events-2.jpg'
import ImageThree from '../Assets/PortfolioImages/events-3.jpg'
import ImageFour from '../Assets/PortfolioImages/modeling-1.jpg'
import ImageFive from '../Assets/PortfolioImages/modeling-2.jpg'
import ImageSix from '../Assets/PortfolioImages/modeling-3.jpg'



const Portfolio = () => {
    return (
        <>
        <BreadCrumb
            img={PortfolioImg}
            imgAlt='Camera taking a photo of the sunset' 
            pageTitle='Portfolio'
            crumb='Home / Portfolio'
            />
            <section className={classes['images-section']}>
            <h2>My work is my passion<br /> My mission is to breath life into my art<br /> And share it with the world</h2>
                <div className={classes.images}>
                    <img class="imgone" src={ImageFour} alt="events portfolio one"/>
                    <img class="imgtwo" src={ImageTwo} alt="events portfolio two"/>
                    <img class="imgthree" src={ImageThree} alt="events portfolio three"/>
                    <img class="imgfour" src={ImageOne} alt="model portfolio one"/>
                    <img class="imgfive" src={ImageFive} alt="model portfolio two"/>
                    <img class="imgsix" src={ImageSix} alt="model portfolio three"/>
                </div>
                
            </section>
        </>
    )
}

export default Portfolio;
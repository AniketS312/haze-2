import React from 'react';

import classes from './BreadCrumb.module.css';


const BreadCrumb = (props) => {
    return  (
        <div className={classes.breadcrumb}>
            <img src={props.img} alt={props.imgAlt} />
            <div className={classes.text}>
                <h1>{props.pageTitle}</h1>
                <span>{props.crumb}</span>
            </div>
        </div>
    )
}

export default BreadCrumb;
import React, { useState } from "react";

import BreadCrumb from "../UI/BreadCrumb";

import ContactImg from '../Assets/contact-us.jpg'

import classes from './ContactUs.module.css'

const ContactInfo = () => {
    return (
        <section className={classes.info}>
            <p>Donec mattis consequat pharetra. Pellentesque egestas turpis eget mauris elementum mollis. Nulla interdum semper est, eget aliquet nulla varius hendrerit.</p>
            <div className={classes.contact}>
                <div>
                    <h5>Address</h5>
                    <p>154 Whyte Ave</p>
                </div>
                <div>
                    <h5>Phone</h5>
                    <p>(403)-599-9890</p>
                </div>
                <div>
                    <h5>Mail</h5>
                    <p>haze@support.com</p>
                </div>
            </div>
        </section>
    )
}   

const ContactForm = () => {
    const [name, setName] = useState("Full Name");
    const [email, setEmail] = useState("Email");
    const [subject, setSubject] = useState("Subject");
    const [phone, setPhone] = useState("Phone Number");
    const [message, setMessage] = useState("Your Message")

    return (
        <section className={classes.contactform}>
            <h3>send a Letter</h3>
            <form className={classes.form}>
                <input 
                type="text"
                value={name}
                onClick = {() => setName('')}
                onChange={e => setName(e.target.value)}
                />
                <input 
                type="email"
                value={email}
                onClick = {() => setEmail('')}
                onChange={e => setEmail(e.target.value)}
                />
                <input 
                type="text"
                value={subject}
                onClick = {e => setSubject('')}
                onChange={e => setSubject(e.target.value)}
                />
                <input 
                type="text"
                value={phone}
                onClick = {e => setPhone('')}
                onChange={e => setPhone(e.target.value)}
                />
                <input 
                type="text"
                value={message}
                onClick = {e => setMessage('')}
                onChange={e => setMessage(e.target.value)}
                />
                <input 
                type="submit"
                value="Send Message"
                />
            </form>
        </section>
    )
}

const ContactUs = () => {
    return(
        <>
        <BreadCrumb
            img={ContactImg}
            imgAlt='Camera taking a photo of the sunset' 
            pageTitle='Contact Us'
            crumb='Home / Contact Us'
            />
        <ContactInfo />
        <ContactForm />
        </>
        )
}

export default ContactUs;
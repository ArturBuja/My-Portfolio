import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import {useRef} from "react";

function ContactMe() {
    const [name, setName] = useState("")

    const [email, setEmail] = useState("")
    const form = useRef();
    const [message, setMessage] = useState("")
    const sendEmail = (e) => {
        e.preventDefault();
        if(!name){
            alert('Fill in the name field\n')
        } else if (!email){
            alert('Fill in the e-mail field\n')
        } else if (!message){
            alert('Fill in the message field\n')
        } else {

        emailjs.sendForm('service_uwh1rwk', 'template_wsm7ggl', form.current, 'user_27h1MqqBApNu181G79mlX')
            .then((result) => {
                console.log(result.text);
                alert("Mail has been sent. I will contact you as soon as possible. Thanks.\n")
            }, (error) => {
                console.log(error.text);
                alert("Something went wrong. Mail was not sent, please try again.\n")
            });

        setName("")
        setEmail("")
        setMessage("")
        }
    };
    return (
        <div className="contact--me" >
            <div className="contact--me-bg"></div>
                <div className="contact--me--inner">
                    <span className="header--text">Contact me</span>
                    <span className="header--subtext">Lets keep in touch</span>
                    <div className="contact--me--card row" >
                        <div className="col-lg-6 col-md-5 col-sm-12 left--contact" >
                            <span className="get--in--touch">Get in touch</span>
                            <div className="anim--container">
                                <lottie-player
                                    src="https://assets9.lottiefiles.com/packages/lf20_uwos7l6e.json"
                                    background="transparent"
                                    speed="1"
                                    style={ {width: "300px"} }
                                    loop autoplay
                                >{ }</lottie-player>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-12 my-auto right--contact" id="contactMe">
                            <form ref={form} onSubmit={sendEmail} className="card--contact--right">
                                <div className="input--group">
                                    <label> Name </label>
                                    <input name="name" onChange={(e =>{setName(e.target.value)})} value={name} className="input--groups" type="text" placeholder="Enter your name"/>
                                </div>
                                <div className="input--group">
                                    <label> E-mail </label>
                                    <input name="email" onChange={(e =>{setEmail(e.target.value)})} value={email} className="input--groups" type="text" placeholder="Enter your email"/>
                                </div>
                                <div className="input--group">
                                    <label> Message </label>
                                    <textarea name="message" onChange={(e =>{setMessage(e.target.value)})} value={message} className="input--groups" type="text" placeholder="Enter your message"/>
                                </div>
                                <div className="input--group">
                                    <input className="btn btn-success" value="Send message" type="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default ContactMe;
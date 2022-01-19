import React, {useState} from 'react';

function ContactMe() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    return (
        <div className="contact--me">
            <div className="contact--me-bg"></div>
                <div className="contact--me--inner">
                    <span className="header--text">Contact me</span>
                    <span className="header--subtext">Lets keep in touch</span>
                    <div className="contact--me--card row">
                        <div className="col-lg-6 col-md-5 col-sm-12 left--contact">
                            <span className="get--in--touch">Get in touch</span>
                            <div className="anim--container">
                                <lottie-player
                                    src="https://assets9.lottiefiles.com/packages/lf20_uwos7l6e.json"
                                    background="transparent"
                                    speed="1"
                                    style={ {width: "300px", height: "300px"} }
                                    loop autoplay
                                >{ }</lottie-player>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-12 my-auto right--contact">
                            <div className="card--contact--right">
                                <div className="input--group">
                                    <label> Name </label>
                                    <input onChange={(e =>{setName(e.target.value)})} value={name} className="input--groups" type="text" placeholder="Enter your email address"/>
                                </div>
                                <div className="input--group">
                                    <label> E-mail </label>
                                    <input onChange={(e =>{setEmail(e.target.value)})} value={email} className="input--groups" type="text" placeholder="Enter your email"/>
                                </div>
                                <div className="input--group">
                                    <label> Message </label>
                                    <textarea onChange={(e =>{setMessage(e.target.value)})} value={message} className="input--groups" type="text" placeholder="Enter your name"/>
                                </div>
                                <div className="input--group">
                                    <button className="btn btn-success">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default ContactMe;
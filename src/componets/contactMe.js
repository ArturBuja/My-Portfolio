import React from 'react';

function ContactMe() {
    return (
        <div className="contact--me">
            <div className="contact--me-bg">
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
                                    style={ {width: "500px", height: "500px"} }
                                    loop autoplay
                                >{ }</lottie-player>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-12 my-auto right--contact">
                            <div className="card--contact--right">
                                <div className="input--group">
                                    <label> Name </label>
                                    <input className="input--groups" type="text" placeholder="Enter your name"/>
                                </div>
                                <div className="input--group">
                                    <label> Name </label>
                                    <input className="input--groups" type="text" placeholder="Enter your name"/>
                                </div>
                                <div className="input--group">
                                    <label> Name </label>
                                    <input className="input--groups" type="text" placeholder="Enter your name"/>
                                </div>
                                <div className="input--group">
                                    <button className="btn btn-success">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
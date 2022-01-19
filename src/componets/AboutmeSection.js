import React from "react";

export function AboutmeSection() {
    return (
        <div className="about--me--section about--me--inside">
            <div className="about--me--header ">
                <span className="header--text">About me</span>
                <span className="header--subtext">Why choose me? </span>
                <div className="about--me--box row shadow-lg">
                    <div className="col-lg-6 col-md-6 col-sm-12 box--left">
                        <lottie-player
                            src="https://assets1.lottiefiles.com/private_files/lf30_Twfrj1.json"
                            background="transparent" speed="1"
                            style={ {width: "500px", height: "500px"} }
                            loop autoplay>{ }</lottie-player>
                    </div>
                    <div className=" col-lg-6 col-md-6 col-sm-12 box--right">
                        <span className="about--me--text">
                             Hi I'm a junior Front-End developer. I finished internal security and completed the JavaScript course on CodersLab. I program in javascript, use react library. I have experience in creating websites and web applications. I love programming and i want to know more interesting things.
                        </span>
                        <span className="about--me--highlights">
                            <span className="highlights--text">Here are few highlist:</span>
                            <span className="highlights--list">
                                <ul>
                                    <li>JavaScript Developer (ES5/ES6+)</li>
                                    <li>CSS3/SCSS</li>
                                    <li>React</li>
                                    <li>GitHub</li>
                                    <li>Trello</li>
                                    <li>HTML</li>
                                </ul>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>)
}
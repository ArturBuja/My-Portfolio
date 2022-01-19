import React from 'react';
import ghlogo from "../assets/GitHub-Mark-Light-32px.png";
import ldlogo from "../assets/LI-In-Bug.png";




function Footer() {
    return (<>
        <div className="footer">
            <a href="https://github.com/ArturBuja">
            <div className="gh--logo">
                <img src={ghlogo} alt="Github logo"/>
                <p>Github</p>
            </div></a>

            <a href="https://www.linkedin.com/in/artur-buja-b42693225/">
            <div className="ld--logo">
            <img src={ldlogo} alt="Linkedin logo"/>
            <p>Linkedin</p>
            </div></a>


        </div>
    </>

    );
}

export default Footer;
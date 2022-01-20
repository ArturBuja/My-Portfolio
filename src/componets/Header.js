import {FaReact} from "react-icons/fa";
import logo from "../assets/P1750825.JPG";
import React, {useState} from "react";

export function Header() {

   const [openNav, setOpenNav] = useState(false)
    return (<>
        <nav className={!openNav ?"nav navbar-new transition-all" : "nav navbar-fixed-new transition-all"}>
            <span className="brand-name"> <FaReact y="10"/> ARTUR BUJA</span>
            <div className="nav--section">
                <span className="nav--items">Home</span>
                <span className="nav--items">About me</span>
                <span className="nav--items">Resume</span>
                <span className="nav--items">Testimonials</span>
                <span className="nav--items">Contact me</span>
            </div>
        </nav>

        <div className="herosection px-10">
            <div className="bars" onClick={()=>setOpenNav(!openNav)}> </div>

            <div className="herosection--2 row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="outer--img Anim">
                        <img src={ logo } alt="image" className="img-fluid custom--img"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="herosection--2--header">
                            <span className="header--text">
                            Hi, I'm <span className="header--text--name">Artur Buja</span>
                            </span>
                        <span className="header--text--enthusiastic">
                            Enthusiastic junior dev 😎
                            </span>
                        <span className="header--text--subheading">
                                Writing front-end applications with passion
                            </span>
                        <div className="header--buttons">
                            <button className="btn--hire--me">Hire me</button>
                            <button className="btn--resume--me">Get Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    </>)
}
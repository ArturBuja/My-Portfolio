import {FaReact} from "react-icons/fa";
import logo from "../assets/P1750825-min.JPG";
import React, {useEffect, useRef, useState} from "react";
import Typed from "typed.js"
import Picker from 'emoji-picker-react';


export function Header() {



    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Enthusiastic developer 😎", "Javascript Developer 👨‍💻", "Communicative guy 😊", "Gaming lover 🎮", "Ambitious 💪🏻"],
            startDelay: 0,
            typeSpeed: 80,
            backSpeed: 20,
            backDelay: 100,
            loop: true,
            showCursor: true,
            autoInsertCss: true,

        });
        return () => {
            typed.destroy()
        }
    }, [])

    const [openNav, setOpenNav] = useState(false)

    return (<>
        <div className="shadow-lg navbar--option--mobile">
            <div className="bars" onClick={ () => setOpenNav(!openNav) }></div>
        </div>
        <nav className={ !openNav ? "nav navbar-new transition-all" : "nav navbar-fixed-new transition-all" }>
            <span className="brand-name"> <FaReact y="10"/> ARTUR BUJA</span>
            <div className="nav--section">
                <a href="#home" className="nav--items" onClick={ () => setOpenNav(false) }>Home</a>
                <a href="#aboutMe" className="nav--items" onClick={ () => setOpenNav(false) }>About me</a>
                <a href="#resume" className="nav--items" onClick={ () => setOpenNav(false) }>Resume</a>
                <a href="#testimonials" className="nav--items" onClick={ () => setOpenNav(false) }>Testimonials</a>
                <a href="#contactMe" className="nav--items" onClick={ () => setOpenNav(false) }>Contact me</a>
            </div>
        </nav>

        <div className="herosection px-10" id="home">

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
                        <span className="header--text--enthusiastic" ref={ el }>
                            {/*Enthusiastic developer  😎*/ }
                            </span>
                        <span className="header--text--subheading">
                                Writing front-end applications with passion
                            </span>
                        <div className="header--buttons">
                            <a href="#contactMe" className="btn--hire--me">Hire me</a>
                            <a href="https://drive.google.com/file/d/1ogA58cvEcCLnUqYwH405nnYKdsoaFogY/view?usp=sharing"
                               target="_blank" className="btn--resume--me">Get Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    </>)
}
import "././scss/main.scss";
import React from "react";
import {HeroSection} from "./componets/HeroSection";
import {AboutmeSection} from "./componets/AboutmeSection";
import {Resume} from "./componets/Resume";


export default function App() {
    return (
        <div className="App">
            <HeroSection/>
            <AboutmeSection/>
            <Resume/>
        </div>
    );
}

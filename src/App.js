import "././scss/main.scss";
import React from "react";
import {Herosection} from "./componets/Herosection";
import {AboutmeSection} from "./componets/AboutmeSection";


export default function App() {
    return (
        <div className="App">
            <Herosection/>
            <AboutmeSection/>
        </div>
    );
}

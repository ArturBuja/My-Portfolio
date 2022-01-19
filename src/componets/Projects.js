import React from "react";

export default function Projects() {
    return (
        <div className="education--container">
            <div className="education--one">
                <div className="education--name">
                    <span className="education--name-school">Scrum Lab Front End</span>
                    <span className="education--degree">Technologies used: SCSS, HTML5, JavaScript</span>
                    <a href="https://arturbuja.github.io/Zaplanuj_Jedzonko/"><span className="education--degree">Check live (click me!)</span>
                    </a>
                </div>
                <div><span className="passedout--year">2022</span></div>
            </div>
            <div className="education--one">
                <div className="education--name">
                    <span className="education--name-school">Own portfolio site</span>
                    <span className="education--degree">Technologies used: JavaScript, React JS , SCSS </span>
                    <a href="https://arturbuja.github.io/My-Portfolio/"><span className="education--degree">You're on it right now </span>🔥
                    </a>
                </div>
                <div><span className="passedout--year">2022</span></div>
            </div>
        </div>
    )
}
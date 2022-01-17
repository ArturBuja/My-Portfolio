import React, {useState} from "react";
import Education from "./Education";
import Work from "./Work";
import Programming from "./Programming";
import Projects from "./Projects";

export function Resume() {

    const [education, setEducation] = useState(true);
    const [workHistory, setWorkHistory] = useState(false);
    const [programmings, setProgrammings] = useState(false);
    const [projects, setProjects] = useState(false);

    return (
        <div className="resume--outer--section">
            <span className="header--text">Resume </span>
            <span className="header--subtext">My formal bio details</span>

            <div className="resume--new--section" >
                <div className="col-lg-4 col-md-4 col-sm-12 shadow-lg resume--left--section" >
                    <div className="bg-new text-dark left--span--resume">
                        
                        <span className="icon-span">
                            <i className="fas fa-user-graduate"></i>
                        </span>
                        <span className="icon-span">
                            <i className="fas fa-briefcase"></i>
                        </span>
                        <span className="icon-span">
                            <i className="fas fa-code"></i>
                        </span>
                        <span className="icon-span">
                            <i className="fas fa-tasks"></i>
                        </span>
                    </div>
                    <div className="d-flex left--inner--resume">
                        <span className="resume--options--items">Education</span>
                        <span className="resume--options--items">Work</span>
                        <span className="resume--options--items">Programming</span>
                        <span className="resume--options--items">Projects</span>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 resume--right--section">
                    { education === true && <Education /> }
                    { workHistory === true && <Work /> }
                    { programmings === true && <Programming /> }
                    { projects === true && <Projects /> }
                </div>
            </div>
        </div>
    );
}
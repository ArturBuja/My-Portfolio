import React from "react";

export default function Work(){
    return( <>
    <div className="work--inside--new">
        <div className="work--container">
            <div className="work">
            <span className="work--name--company">Freelancer</span>
            <span className="passedout--year">2021 - present</span>
        </div>
        </div>
        <div className="work--container">
            <span className="work--position">{" "}</span>
            <span className="work--description">
                <ul>
                    <li>Build one-page-sites</li>
                </ul>
            </span>
        </div>

        <div className="work--container">
            <div className="work">
            <span className="work--name--company">Burger King Amrest Sp. z o.o</span>
            <span className="passedout--year">05/2018 - 09/2021</span>
            </div>
        </div>
        <div className="work--container">
            <span className="work--position">Facility Shift Manager</span>
            <span className="work--description">
                <ul>
                    <li>Shift management, assignment of duties</li>
                    <li>Taking care of cleanliness and taking care of stocking cleaning agents</li>
                    <li>Servicing the equipment</li>
                    <li>Repairing equipment in restaurant</li>
                    <li>Management facility cost</li>
                </ul>
        </span>
        </div>
    </div>

    </>)
}
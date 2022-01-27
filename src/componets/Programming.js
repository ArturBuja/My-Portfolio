import React from "react";

export default function Programming() {
    const values = [
        {
            id: 1,
            text: "HTML5",
            percentage: 35
        },
        {
            id: 2,
            text: "Javascript",
            percentage: 30
        },
        {
            id: 3,
            text: "React JS ",
            percentage: 20
        },
        {
            id: 4,
            text: "CSS3",
            percentage: 30
        },
        {
            id: 5,
            text: "SASS",
            percentage: 30
        },
        {
            id: 6,
            text: "Bootstrap",
            percentage: 30
        },
        {
            id: 7,
            text: "WebStorm IDE",
            percentage: 30
        },


    ]
    return (
        <div className="">
            <div className="row">
                { values.map((value) => {
                    return (
                        <div className="col-lg-5 col-mg-6 col-sm-12 box" key={ value.id }>
                            <span className="language">{ value.text }</span>
                            {/*<div className="progress--bar">*/}
                            {/*    <div style={ {width: `${ value.percentage }%`} }*/}
                            {/*         className="progress--bar--second">{ "" }</div>*/}
                            {/*</div>*/}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
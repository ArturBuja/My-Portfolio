import React from "react";

export default function Programming(){
    const values = [
        {
            text:"Javascript",
            percentage: 30
        },
        {
            text:"HTML5",
            percentage: 35
        },
        {
            text:"React JS ",
            percentage: 20
        },
        {
            text:"CSS3",
            percentage: 30
        },
        {
            text:"SCSS",
            percentage: 30
        },

    ]
    return <>
        <div className="">
            <div className="row">
                {
                    values.map((value, index) =>{
                        return(
                            <>
                                <div className="col-lg-5 col-mg-6 col-sm-12 box">
                                    <span className="language">{value.text}</span>
                                    <div className="progress--bar">
                                        <div style={{width: `${value.percentage}%`}} className="progress--bar--second"></div>
                                    </div>
                                </div>
                            </>
                            )

                    })
                }
            </div>
        </div>
    </>
}
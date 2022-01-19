import React, {useEffect, useState} from 'react';

function Testimonials() {
    const [name, getName] = useState([]);

    useEffect(() => {
        getData().catch(() => {

        }, [])
    }, [])

    const getData = async () => {
        const resume = await fetch(`https://api.github.com/users/ArturBuja/repos`)
        const data = await resume.json()

        getName(data)
    }

    return (

        <div className="about--me--section about--me--inside">
            <div className="about--me--header ">
                <span className="header--text">Testimonials </span>
                <span className="header--subtext">My github sample projects </span>
                <div className="row repo--container">
                    { name.map((value => {
                        return (

                            <div key={ value.id } className="col-lg-4 col-sm-12 col-md-6  repo--inner--container">
                                <div className="card shadow repo--card">
                                    <span className="card--name">{ value.name }</span>
                                    <span className="card--description">{ value.description }</span>
                                    <a href={ value.clone_url } target="_blank"><span
                                        className="card--link">GET SOURCE</span></a>
                                </div>
                            </div>
                        )
                    })) }
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
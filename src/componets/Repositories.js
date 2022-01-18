import React, {useEffect, useState} from 'react';

function Repositories() {
    const [name, getName] = useState([]);

    useEffect(() => {
        getData().catch(() => {

        }, [])
    }, [])

    const getData = async () => {
        const resume = await fetch(`https://api.github.com/users/ArturBuja/repos`)
        const data = await resume.json()
        for (let i = 0; i < data.length; i++) {
            getName([data[i].name])
        }
        // getName(data[1].name)

    }
    // console.log(name)
    const fakeRepo = [
        {
            id: 1,
            name: "Pig Game",
            text: "sample text about repo sample text about reposample text about repo sample text about repo sample text about repo sample text about repo"
        },
        {
            id: 2,
            name: "Sample Game",
            text: "sample text about repo sample text about reposample text about repo sample text about repo sample text about repo sample text about repo"
        },
        {
            id: 3,
            name: "Sample Game",
            text: "sample text about repo sample text about reposample text about repo sample text about repo sample text about repo sample text about repo"
        }
    ]
    return (
        <>

            <div className="about--me--section about--me--inside">
                <div className="about--me--header ">
                    <span className="header--text">Testimonials </span>
                    <span className="header--subtext">My github sample projects </span>
                    <div className="row repo--container">
                        { fakeRepo.map((value => {
                            return (

                                <div key={ value.id } className="col-lg-4 col-sm-12 col-md-6  repo--inner--container">
                                    <div className="card shadow repo--card">
                                        <span className="card--name">{ value.name }</span>
                                        <span className="card--description">{ value.text }</span>
                                        <span className="card--link">{ value.text }</span>
                                    </div>
                                </div>
                            )
                        })) }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Repositories;
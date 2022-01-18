import React from "react";

export default function Education(){
    return <>
    <div className="education--container">
        <div className="education--one">
            <div className="education--name">
                <span className="education--name-school">CodersLab Course</span>
                <span className="education--degree">Javascript developer</span>
            </div>
            <div><span className="passedout--year">2021 - 2022</span></div>
        </div>
        <div className="education--one">
            <div className="education--name">
                <span className="education--name-school">Wyższa szkoła zarządzania ochroną pracy</span>
                <span className="education--degree">Master in Internal Security</span>
            </div>
            <div><span className="passedout--year">2015 - 2020</span></div>
        </div>
        <div className="education--one">
            <div className="education--name">
                <span className="education--name-school">Secondary school complex</span>
                <span className="education--degree">IT specialist</span>
            </div>
            <div><span className="passedout--year">2010 - 2015</span></div>
        </div>
    </div>
    </>
}
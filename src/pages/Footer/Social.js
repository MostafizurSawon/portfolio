import React from 'react';
import "./Social.css";
import html from "./../../images/icons/icons8-html.gif"
import linkedin from "./../../images/icons/linkedin-circled-scale.gif"
import facebook from "./../../images/icons/facebook-circled-shake.gif"
import github from "./../../images/icons/icons8-github.gif"

const Skills = () => {
    return (
        <>
        <div id="Skills" className="skill">
            <div className="background-one">
                <div className="link-container">
                <a className="link-one" href="https://github.com/MostafizurSawon">
                <h2 className="first_button">
                <img className="me-1" src={github} width="25px" alt="" />
                GitHub</h2>
                </a>
                </div>
            </div>
            <div className="background-two link-container mx-2">
                <a className="link-two" href="https://www.linkedin.com/in/mostafizur-rahman-sawon">
                <h2 className="second_button">
                <img className="me-1" src={linkedin} width="25px" alt="" />
                LinkeDin</h2>
                </a>
            </div>
            <div className="background-three link-container">
            <a className="link-one" href="https://www.facebook.com/s4sawon/">
            <h2 className="third_button">
                <img className="me-1" src={facebook} width="25px" alt="" />
                Facebook
            </h2>
            </a>
            </div>
        </div>

        </>
    );
};

export default Skills;
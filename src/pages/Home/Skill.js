import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logohtml from "./../../images/icons/icons8-html.gif";
import logoJavaScript from "./../../images/icons/icons8-javascript.gif";
import logoReact from "./../../images/icons/icons8-react-native.gif";
import logoReact2 from "./../../images/icons/physics.gif";
import logoSettings from "./../../images/icons/settings.gif";
import logoGear from "./../../images/icons/gear.gif";
import logogit from "./../../images/icons/icons8-github.gif";
import logochrome from "./../../images/icons/chrome.gif";
import logoskill from "./../../images/icons/developer-flat.gif";
import "./Skill.css";

const Skill = () => {
    return (
        <div className="pb-5">
        <div>
            <h2 className="text-center mt-5 mb-5 skill d-flex justify-content-center align-items-center">
            <img className="me-1" src={logoGear} width="50px" alt="" />
                My Skills
            <img className="ms-1"src={logoGear} width="50px" alt="" />
            </h2>
        </div>
        <Container className="border-1">
        <Row xs={2} md={4} className="mb-2 d-flex justify-content-center align-items-center gx-3 gy-3 pb-3 skill">
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logohtml} width="30px" alt="" />
                    HTML5
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    {/* <img className="me-1" src={logocss} width="20px" alt="" /> */}
                    <i className="fa-brands fa-css3-alt icon_correction me-1"></i>
                    CSS3
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    {/* <img className="me-1" src={logohtml} width="30px" alt="" /> */}
                    <i className="fa-brands fa-bootstrap me-1 icon_correction"></i>
                    BootStrap
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    {/* <img className="me-1" src={logohtml} width="30px" alt="" /> */}
                    {/* <i className="fa-brands fa-bootstrap me-1 icon_correction"></i> */}
                    Tailwind CSS
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logoJavaScript} width="30px" alt="" />
                    JavaScript
                </li>
            </Col>
            {/* <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logoJavaScript} width="30px" alt="" />
                    <i class="fa-brands fa-js-square me-1 icon_correction"></i>
                    Es6
                </li>
            </Col> */}
            {/* <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logoJavaScript} width="30px" alt="" />
                    Restfull Api
                </li>
            </Col> */}
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logoJavaScript} width="30px" alt="" />
                    Dom manipulation
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logoReact} width="25px" alt="" />
                    React
                </li>
            </Col>
            {/* <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logoReact} width="20px" alt="" />
                    <i class="fa-brands fa-bootstrap me-1 icon_correction"></i>
                    React BootStrap
                </li>
            </Col> */}
            {/* <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logoReact} width="24px" alt="" />
                    Material Ui (Basic)
                </li>
            </Col> */}
            {/* <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logoReact2} width="30px" alt="" />
                    React Router
                </li>
            </Col> */}
            {/* <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logoSettings} width="30px" alt="" />
                   Firebase Authenticate
                </li>
            </Col> */}
            {/* <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    MongoDB (Basic)
                </li>
            </Col> */}
            {/* <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    Node.js (Basic)
                </li>
            </Col> */}
            {/* <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    
                    Express.js
                </li>
            </Col> */}
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logogit} width="30px" alt="" />
                    Git
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logogit} width="30px" alt="" />
                    GitHub
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    <img className="me-1" src={logochrome} width="30px" alt="" />
                    Chrome DevTool
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    {/* <img className="me-1" src={logohtml} width="30px" alt="" /> */}
                    Netlify Deploy
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    {/* <img className="me-1" src={logochrome} width="30px" alt="" /> */}
                    SQL
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    {/* <img className="me-1" src={logochrome} width="30px" alt="" /> */}
                    OOP
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    {/* <img className="me-1" src={logochrome} width="30px" alt="" /> */}
                    Python
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    {/* <img className="me-1" src={logochrome} width="30px" alt="" /> */}
                    Django
                </li>
            </Col>
            <Col className="">
                <li className="skill_first d-flex justify-content-center align-items-center">
                    {/* <img className="me-1" src={logochrome} width="30px" alt="" /> */}
                    Postgresql
                </li>
            </Col>
        </Row>
        </Container>
        </div>
    );
};

export default Skill;
import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import Projects from './Projects';
import reactLogo from "./../../images/icons/physics.gif";
import "./ProjectBar.css"
import Design from './Design';

const ProjectBar = () => {
    return (
        <div className="pt-5 projectbar back">
            <Tab.Container className="tab-style" defaultActiveKey="first">
            <Row>
                <Col className="d-flex justify-content-center">
                <Nav variant="tabs" className="tab-change d-flex justify-content-center align-items-center">
                    <Nav.Item className="tab">
                        <Nav.Link eventKey="first">
                        <img className="me-1" src={reactLogo} width="26px" alt="" />
                        ALL Project
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="tab">
                        <Nav.Link eventKey="second">
                        <img className="me-1" src={reactLogo} width="26px" alt="" />
                        React
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="tab">
                        <Nav.Link eventKey="third">
                        <img className="me-1" src={reactLogo} width="26px" alt="" />
                        MERN stack
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="tab">
                        <Nav.Link eventKey="fourth">
                        <img className="me-1" src={reactLogo} width="26px" alt="" />
                        Web Design
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={12}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Projects></Projects>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Projects></Projects>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Projects></Projects>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <Design></Design>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
    );
};

export default ProjectBar;
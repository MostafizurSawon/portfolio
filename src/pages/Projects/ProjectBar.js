import React from 'react';
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import Projects from './Projects';

const ProjectBar = () => {
    return (
        <div className="">
            <Tab.Container defaultActiveKey="second">
        <Row>
            <Col className="d-flex justify-content-center">
            <Nav variant="tabs" className="flex">
                <Nav.Item>
                <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">MERN stack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fourth">Web Design</Nav.Link>
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
                <Projects></Projects>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </div>
    );
};

export default ProjectBar;
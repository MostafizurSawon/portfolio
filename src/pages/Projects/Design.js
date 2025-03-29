import React, { useEffect, useState } from 'react';
import { Card, Col, Button, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectBar from './ProjectBar';

const Design = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div id="frontend" className="my-5 whole">
            {/* <div className="bg-dark">
                <h2 className="text-center text-light py-3">My projects</h2>
            </div> */}
            {/* <div className="my-5">
                <ProjectBar></ProjectBar>
            </div> */}
            <Container>
                <Row xs={1} md={2} className="mb-2 d-flex justify-content-center align-items-center gx-5 gy-5">
                    {projects
                        .filter(project => project.tab === "frontend") 
                        
                        .map(project => (
                            
                            <Col project={project} key={project.key}>
                            <Card className="w-100 mx-auto">
                            <div className="project-image">

                                <Card.Img variant="top" src={project.img} />
                            </div>
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text className="text-dark">
                                    Tech: {project.tech}
                                    </Card.Text>
                                    <Card.Text className="text-dark">
                                    Description: {project.description}
                                    </Card.Text>
                                    <div className="d-flex ">
                                    <a className="" href={project.liveFr}><Button variant="outline-success">Frontend Live</Button></a>
                                    <a className="mx-2" href={project.githubF}><Button variant="outline-success">Frontend Github</Button></a>
                                    </div>
                                    
                                </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default Design;

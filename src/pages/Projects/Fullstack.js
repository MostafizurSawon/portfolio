import React, { useEffect, useState } from 'react';
import { Card, Col, Button, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectBar from './ProjectBar';

const Fullstack = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div id="fullstack" className="my-5 whole">
            <Container>
                <Row xs={1} md={2} className="mb-2 d-flex justify-content-center align-items-center gx-5 gy-5">
                    {projects
                        .filter(project => project.tab == "Fullstack")
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
                                    {project.liveFr && ( 
                                        <a className="" href={project.liveFr}>
                                            <Button variant="outline-success">Live Site</Button>
                                        </a>
                                    )}
                                    {project.githubF && ( 
                                    <a className="mx-2" href={project.githubF}><Button variant="outline-success">Frontend Github</Button></a>
                                    )}
                                    {project.liveB && ( 
                                        <a className="" href={project.liveB}>
                                            <Button variant="outline-success">Backend Live</Button>
                                        </a>
                                    )}
                                    
                                    <a className="mx-2" href={project.githubB}><Button variant="outline-success">Backend Github</Button></a>
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

export default Fullstack;

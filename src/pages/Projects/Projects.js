import React, { useEffect, useState } from 'react';
import { Card, Col, Button, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    }, []);
    return (
        <div>
            <div className="bg-dark">
                <h2 className="text-center text-light py-3">My projects</h2>
            </div>
            <Container>
            <Row xs={1} md={3} className="my-2 d-flex justify-content-center align-items-center gy-4">
                {
                    projects.map(project => (
                    <Col project={project} key={project.key}>
                    <Card>
                        <Card.Img className="image-height"  variant="top" src="" />
                        <Card.Body>
                        <Card.Title>Name : <span className="text-success">{project.name}</span> </Card.Title>
                        <Card.Text>
                           Short Description : {project.niche}
                        </Card.Text>
                        <Card.Text>
                            <a href={project.live}>Live Site</a>
                        </Card.Text>
                        </Card.Body>
                        <Link to={`/projects/${project.key}`}>
                        <Button className="banner-button text-light" variant="success" size="lg">Details</Button>
                        </Link>
                    </Card>
                    </Col>
                        )
                    )}
                
            </Row>
            </Container>
        </div>
    );
};

export default Projects;
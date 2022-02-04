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
        <div className="my-5 whole">
            <div className="bg-dark">
                <h2 className="text-center text-light py-3">My projects</h2>
            </div>
            <Container>
            <Row xs={1} md={2} className="my-2 d-flex justify-content-center align-items-center gx-5 gy-5">
                {
                    projects.map(project => (
                    <Col project={project} key={project.key}>
                    {/* <Card>
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
                    </Card> */}

                    <div className="card mx-auto border-0 p-2 w-100">
                        <div className="image">
                        <img className="w-100" src={project.img} alt="" />
                        </div>
                        <div className="details">
                        <div className="center">
                            <h4> Name: {project.name} </h4>
                            <p>
                           Short Description : {project.niche}
                            </p>
                            <p>
                            <Button className="text-light me-3 live" variant="success" size="md"><a href={project.live}>Live Site</a></Button>
                            
                            <Link to={`/projects/${project.key}`}>
                        <Button className="banner-button text-light" variant="success" size="md">Details</Button>
                        </Link></p>
                            {/* <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                            </ul> */}
                        </div>
                        </div>
                    </div>

                    </Col>
                        )
                    )}
                
            </Row>
            </Container>
        </div>
    );
};

export default Projects;
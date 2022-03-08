import React, { useEffect, useState } from 'react';
import { Card, Col, Button, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectBar from './ProjectBar';

const Design = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    }, []);
    return (
        <div id="fullstack" className="my-5 whole">
            {/* <div className="bg-dark">
                <h2 className="text-center text-light py-3">My projects</h2>
            </div> */}
            {/* <div className="my-5">
                <ProjectBar></ProjectBar>
            </div> */}
            <Container>
            <Row xs={1} md={2} className="mb-2 d-flex justify-content-center align-items-center gx-5 gy-5">
                {
                    projects.slice(5,20).map(project => (
                    <Col project={project} key={project.key}>
                    <div className="card mx-auto border-0 p-2 w-100">
                        <div className="image">
                        <img className="w-100" src={project.img} alt="" />
                        </div>
                        <div className="details">
                        <div className="center">
                            <h4>  {project.name} </h4>
                            <p>
                           Short Description : {project.niche}
                            </p>
                            {/* <p>
                            <Button className="text-light me-3 live" variant="success" size="md"><a href={project.live}>Live Site</a></Button>
                            
                            <Link to={`/projects/${project.key}`}>
                            <Button className="banner-button text-light" variant="success" size="md">Details</Button>
                            </Link>
                            </p> */}
                            <ul>
                            <li className=""><a href={project.live}>Live </a></li>
                            {/* <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                            <li><a href={project.github}><i className="fa fa-github" aria-hidden="true"></i></a></li>
                            </ul>
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

export default Design;
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import banner from "./../../images/banner2.jpg"

const Banner = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col className="d-flex justify-content-center align-items-center" xs={12} md={6}>
                 <div>
                 <h1 className="">Welcome to <br /> Mostafizur's website</h1>
                <a href="https://drive.google.com/file/u/6/d/1oruHV2BfMVWSCA1J8POvleI4FGTVeUKJ/view?usp=sharing&usp=embed_facebook" target="_blank"><Button variant="success">My Resume</Button></a>
                 </div>
                </Col>
                <Col xs={12} md={6}>
                <img className="w-100" src={banner} alt="" />
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Banner;
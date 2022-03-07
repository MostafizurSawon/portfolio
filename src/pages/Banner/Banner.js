import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import banner from "./../../images/icons/social-media.gif";
import banner from "./../../images/banner2.jpg";

const Banner = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col className="d-flex justify-content-center align-items-center gap" xs={12} md={6}>
                 <div>
                 <h1 className="gap">Welcome to <br /> Mostafizur's website</h1>
                <div className="py-4">
                <a className="resume_button" href="https://drive.google.com/file/u/6/d/1oruHV2BfMVWSCA1J8POvleI4FGTVeUKJ/view" target="_blank"><i className="fas fa-cog fa-spin me-2"></i>My Resume</a>
                </div>
                 </div>
                </Col>
                <Col xs={12} md={6}>
                <img className="w-100" src={banner} alt="" />
                {/* <img src="./../../images/icons/phone.gif" alt="" /> */}
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Banner;
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import banner from "./../../images/icons/social-media.gif";
import TextAnimation from "react-animate-text";
import banner from "./../../images/banner2.jpg";

import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "front-end developer",
  "React Developer",
  "MERN stack developer",
  "Web Developer"
];

const Banner = () => {

    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
    return (
        <div>
            <Container>
            <Row>
                <Col className="d-flex justify-content-center align-items-center gap" xs={12} md={6}>
                 <div>
                 <TextAnimation>
                 <h4 className="gap">Welcome to My website</h4>
                 <h3>I am a junior </h3>
                 <h4 className="text-primary">
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                    /> 
                 </h4>
                 
                  <h3> with some skills of backend.</h3>
                 </TextAnimation>
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
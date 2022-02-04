import React from 'react';
import { Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div>
             
            <Row xs={1} md={3} className="my-2 d-flex justify-content-center align-items-center gy-4">
                <Col>
                <h6>Hello I am Mostafizur. I have a deep interest in web development. At first I built website for fun then I took it seriosuly. I have knowledge in html, css, bootstrap, javascript, react, firebase authentication, git, github, node.js, express.js, mongodb. Its not all. I am always hungry to learn new things.</h6>
<br />
                <h2>Summary</h2>
                <h2 className="footer-border"></h2>
                <p>Self-motivated,  looking for a role as a frontend web developer/junior web developer. Passionate about building first-class web applications. Aiming to be an accomplished full-stack web developer. So, Now want to work at the industry level where I can work with responsibility and can achieve the highest level. I believe under supervised seniors, I can give my utmost best for the company.</p>
                
                </Col>
                <Col>
                <img className="w-100" src="https://image.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default About;
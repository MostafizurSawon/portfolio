import React from 'react';
import { Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div>
             
            <Row xs={1} md={3} className="my-2 d-flex justify-content-center align-items-center gy-4">
                <Col>
                <h6>Hello I am Mostafizur.</h6>
<br />
                <h2>Summary</h2>
                <h2 className="footer-border"></h2>
                <p>Aspiring Junior Full-Stack Developer with a strong foundation in Django and React, complemented by a
non-CS background. Proficient in C, C++, Python, SQL, and core CS fundamentals including data structures,
algorithms, and OOP. Eager to leverage my diverse skill set to develop efficient, scalable web applications.
Seeking remote, onsite, or hybrid opportunities to contribute to a collaborative team and drive project success.</p>
                
                </Col>
                <Col>
                <img className="w-100" src="https://image.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default About;
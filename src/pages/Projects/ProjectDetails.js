import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Col, Row, Image, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Project.css';


const Projectdetails = () => {
    const { projectId } = useParams();

    const [details, setDetails] = useState([]);
    const [singleData, setSingleData] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MostafizurSawon/portfolio/main/public/projectsDetails.json')
        .then(res=>res.json())
        .then(data=>setDetails(data))
        .catch(err => {
            console.log("Error Reading data " + err);
        });
    }, []);

    useEffect(() => {
       const showDetails = details.find(detail => detail.key === projectId)
       setSingleData(showDetails)
    }, [details]);
    return (
        <Col className="whole">
        <Card className="custom-card border-0 ">

        <Row>
        <Col sm={7} className="d-flex justify-content-center align-items-center">
        <Carousel fade>
        <Carousel.Item>
         <img
            className="d-block w-100 h-100"
            src={singleData?.img1}
            alt="First slide"
            />
                </Carousel.Item>
                <Carousel.Item>
                    <img
            className="d-block w-100 h-100"
            src={singleData?.img2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h1 className="global-text">Collection of <span className="banner-span">Outdoor Toys</span> </h1>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100 h-100"
            src={singleData?.img3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h1 className="global-text">Best <span className="banner-span">Collections</span> </h1>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            </Col>
            <Col className="my-3 d-flex align-items-center" sm={5}>
                <div>
                <h4 className="text-dark mb-5">
                   Name : {singleData?.name}</h4>
                <div>
                    <a href={singleData?.live}>
                        <Button className="banner-button text-light my-2" variant="success" size="lg">Live site</Button>
                    </a>
                    <br />
                    <a href={singleData?.gitClient}>
                    <Button className="banner-button me-2" variant="info" size="lg">Github Client Side code</Button>
                        
                    </a>
                    <a href={singleData?.gitServer}>
                    <Button className="banner-button text-dark" variant="info" size="lg">Github Server Side code</Button>
                        
                    </a>
                </div>
                    
                <h5 className="mb-5">Description : {singleData?.description}</h5>
                <Link to="/home">
                <Button className="banner-button text-dark" variant="info" size="lg"> <i className="fas fa-chevron-circle-left"></i> Home</Button>
                </Link>
                </div>
                
            </Col> 
        </Row>
        </Card>
        </Col>

    );
};

export default Projectdetails;
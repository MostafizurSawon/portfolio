import React, { useEffect, useState } from 'react';
import { Card, Container, Col, Row, Image, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import './Projectdetails.css';


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
        <Col>
        <Card className="custom-card border-0 ">

        <Row>
        <Col sm={7} className="d-flex justify-content-center align-items-center">
        <Carousel fade>
        <Carousel.Item>
         <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
            />
                </Carousel.Item>
                <Carousel.Item>
                    <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h1 className="global-text">Collection of <span className="banner-span">Outdoor Toys</span> </h1>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner3}
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
                <h4 className="text-dark mb-5">
                   Country : {singleData?.country}</h4>
                    
                <h5 className="mb-5">Experience : {singleData?.experience}</h5>
                <Link to="/home">
                <button  className=" custom-btnn"> <i className="fas fa-chevron-circle-left"></i> Home</button>
                </Link>
                </div>
                
            </Col>
        </Row>
        </Card>
        </Col>

    );
};

export default Projectdetails;
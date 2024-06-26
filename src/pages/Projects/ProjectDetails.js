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
        <Row xs={1} md={1} className="my-2 d-flex justify-content-center align-items-center whole w-100 border-0 px-2 mx-3 mx-auto text-center">
        <Col className="d-flex my-4 justify-content-center align-items-center details-img">
        <Carousel fade>
        <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center">
            <img
            className="d-block w-100 h-100 p-5"
            src={singleData?.img1}
            alt="First slide"
            />
        </div>
         
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
            <Col className="my-3 d-flex align-items-center" >
                <div>
                <h4 className="text-dark mb-5">
                   Name : {singleData?.name}</h4>
                <div>
                    <a href={singleData?.live}>
                        <Button className="my-2 me-2" variant="info" size="lg"><i class="fab fa-red-river me-2"></i>Live site</Button>
                    </a>
                    <a href={singleData?.gitClient}>
                    <Button className="me-2" variant="info" size="lg"><i className="fa fa-github me-2" aria-hidden="true"></i>Github Client Side code</Button>
                        
                    </a>
                    <a href={singleData?.gitServer}>
                    <Button className="" variant="info" size="lg"><i className="fa fa-github me-2" aria-hidden="true"></i>Github Server Side code</Button>
                        
                    </a>
                    {/* <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                            </ul> */}
                </div>
                    
                <h5 className="my-5 gap">Description : {singleData?.description}</h5>
                <Link to="/home">
                <Button className="banner-button text-light" variant="success" size="lg"> <i className="fas fa-chevron-circle-left"></i> Home</Button>
                </Link>
                </div>
                
            </Col> 
        </Row>

    );
};

export default Projectdetails;
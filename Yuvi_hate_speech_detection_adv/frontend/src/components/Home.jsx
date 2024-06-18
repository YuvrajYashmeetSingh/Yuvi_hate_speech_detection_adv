import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img5 from "../img/4061494.jpg";

const Home = () => {
  const handleLearnMoreClick = () => {
    window.open('https://en.wikipedia.org/wiki/Hate_speech', '_blank'); // Replace with your target URL
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="w-100 p-4">
        {/* Image Column */}
        <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }} className="d-flex justify-content-center align-items-center animate__animated animate__fadeInRight mb-3 mb-md-0">
          <img src={img5} alt="Hate Speech Detection" className="img-fluid" style={{ maxWidth: "70%", height: "auto" }} loading='lazy' />
        </Col>
        
        {/* Content Column */}
        <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }} className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="font-weight-bold mb-3 animate__animated animate__zoomIn text-center">
            HATE SPEECH DETECTION
          </h1>
          <p className="text-center">
            This is a project aimed at detecting hate speech using advanced machine learning algorithms.
          </p>
          <p className="text-center">
            Our mission is to create a safer online environment by identifying and addressing hate speech in real-time.
          </p>
          <Button variant="primary" onClick={handleLearnMoreClick}>Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

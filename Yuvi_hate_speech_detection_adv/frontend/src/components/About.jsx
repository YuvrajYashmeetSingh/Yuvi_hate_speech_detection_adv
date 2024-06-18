import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import img4 from "../img/4014255.jpg";

const About = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <Container fluid className="container my-5 ">
      <Row className="justify-content-center">
        <Col xs={{ order: 1 }} md={{ span: 8, order: 1 }} className="text-center">
          <img 
            src={img4} 
            alt="About Us" 
            className="about-img mb-4"
            style={{ width: '100%', maxWidth: '20rem', height: 'auto', borderRadius: '50%' }}
          />
        </Col>
        <Col xs={{ order: 2 }} md={{ span: 8, order: 1 }} className="text-center">
          <h2>About Us</h2>
          <p>
            This website is made and managed by a CSE student of the final year at NIT Srinagar: Yuvraj Yashmeet Singh. 
            This site is about detecting hate in text, speech, and file.
          </p>
          <Button variant="primary" onClick={navigateHome} className="mt-3">
            <FaHome /> Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

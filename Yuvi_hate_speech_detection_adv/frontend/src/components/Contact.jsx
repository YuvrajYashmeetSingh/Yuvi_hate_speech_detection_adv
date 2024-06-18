import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaUser, FaHome, FaExclamationCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_qu9qngk', //  EmailJS service ID
      'template_z17iwlv', //  EmailJS template ID
      formData,
      '5lPKVm9OzqcDQG53w' //  EmailJS user ID
    ).then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    setFormData({
      email: '',
      name: '',
      address: '',
      message: '',
    });
  };

  return (
    <Container className="contact-container mt-5 p-4 animated fadeIn" >
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Contact Us</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label><FaEnvelope /> Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label><FaUser /> Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label><FaHome /> Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label><FaExclamationCircle /> Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

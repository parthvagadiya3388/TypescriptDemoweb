import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row, InputGroup } from "react-bootstrap";
import img1 from "../assets/images/costomer.jpg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "./footer";
import Header from './header';

const EmployePage: React.FC = () => {
  return (
    <div>
      <Header />  
      <Container fluid>
        <Row className="">
          <Col className="p-4 wlc_card align-content-center" sm={12} md={12} lg={6}>
            <Link to="/ForWorkSpace">
              <Button className='btn btn-light btn-outline-dark'>
                <IoIosArrowBack /> Back
              </Button>
            </Link>
            <Card className="p-4 main_card">
              <h2 className="container"> <strong>For Your Employees</strong> </h2>
              <p className="container"> We're always looking to work with the best spaces around the world. </p>
              <Form>
                <div className="d-flex flex-wrap">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Name</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <FaUser />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="text" placeholder="Enter your name" id="name" />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Email</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <MdEmail />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="email" placeholder="Enter your email" id="email" />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Comments</strong>
                      </Form.Label>
                      <Form.Control
                        className="radius"
                        as="textarea"
                        placeholder="Enter your Comments"
                      />
                    </Form.Group>
                  </Col>
                </div>
                <div className="container">
                  <Button className="Submit_button w-100 p-2">
                    Review
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={6} className="h-100 image_main">
            <Image className="Bus_img" src={img1} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default EmployePage;

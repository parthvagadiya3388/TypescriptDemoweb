import React, { useState } from "react";
import { Col, Container, Row, Image, Button, Modal, Card, Form, InputGroup } from "react-bootstrap";
import { FiMail, FiLock } from 'react-icons/fi';
import img1 from "../assets/images/bus2.webp";

const Welcome2: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  
  const handleClose= () => setShow(false);
  const handleClose2= () => setShow2(false);

  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  return (
    <Container fluid className="bg-succes Full_Container">
      <Row>
        <Col className="Col1_div" sm={12} md={6}>
          <Image src={img1} className="Cave_image"/>
        </Col>
        <Col sm={12} md={6} className="pl-4 pr-4">
          <p>Acesee to unlock the doors</p>
          <h2>It all begins with a <strong className="text-primary">Businesspass</strong></h2>
          <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.</p>
          <div className="button_div">
            <Button className="Submit_button member_button" id="mobile_button" onClick={handleShow}>Explore Membership</Button>
            <Button className="Submit_button Account_button ml-2 btn-outline-primary bg-light" id="mobile_button" onClick={handleShow2}>Activate Account</Button>
          </div>
        </Col>  
      </Row>

      <Modal show={show}>
        <Card className="p-4 togl_card">
          <div className="d-flex">
              <Col md={10} className="p-0">
                <h2><strong>Explore Membership</strong></h2>
              </Col>
              <Col md={2} className="text-end">
                <button type="button" className="btn-close toggle_button m-2 ml-2" onClick={handleClose}></button>
              </Col>
          </div>
          <p>Please Enter Your Details</p>
          <Form className="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><strong>Email</strong></Form.Label>
              <InputGroup>
                <InputGroup.Text><FiMail /></InputGroup.Text>
                <Form.Control type="email" placeholder="Enter email" />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><strong>Password</strong></Form.Label>
              <InputGroup>
                <InputGroup.Text><FiLock /></InputGroup.Text>
                <Form.Control type="password" placeholder="Password" />
              </InputGroup>
            </Form.Group>
          </Form>
          
            <p>Please Enter Your Details</p> 
          <Form className="d-flex justify-content-between">
              <Form.Check  label="Service" id="servicecheckBox"/>
              <Form.Check  label="Fund" id="fundcheckBox"/>
              <Form.Check  label="Detail" id="detailcheckBox"/>
          </Form><br />

          <Button className="Submit_button" variant="primary" type="submit">
            Submit
          </Button>
        </Card>
      </Modal>

      <Modal show={show2} className="">
        <Card className="p-4 togl_card">
          <div className="d-flex">
              <Col md={10} className="p-0">
                  <h2><strong>Activate Account </strong></h2>
              </Col>
              <Col md={2} className="text-end">
                 <button type="button" className="btn-close toggle_button mt-2 ml-2  " onClick={handleClose2}></button>
              </Col>
          </div>
         
          <p>Please Enter Your Details</p>
          <Form className="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><strong>Email</strong></Form.Label>
              <InputGroup>
                <InputGroup.Text><FiMail /></InputGroup.Text> {/* Icon */}
                <Form.Control type="email" placeholder="Enter email" />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><strong>Password</strong></Form.Label>
              <InputGroup>
                <InputGroup.Text><FiLock /></InputGroup.Text> {/* Icon */}
                <Form.Control type="password" placeholder="Password" />
              </InputGroup>
            </Form.Group>
          </Form>
          <Button className="Submit_button" variant="primary" type="submit">
            Submit
          </Button>
        </Card>
      </Modal>
    </Container>
  );
}

export default Welcome2;

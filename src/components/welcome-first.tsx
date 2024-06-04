import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Image, Row, InputGroup } from "react-bootstrap";
import { FiMail, FiLock } from 'react-icons/fi'; 
import img1 from '../assets/images/cofee.jpg';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import { AuthContext } from "../context/AuthContext";

interface User {
  email: string;
  password: string;
}

export const initialValues: User = {
  email: "parth@example.com",
  password: "5555",
}

const Welcome1: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [userNames, setUserNames] = useState<User[]>([]);
  const [invalidError , setInvalidError] = useState<string>();

  useEffect(() => {
    try {
      const data: string | null = localStorage.getItem('formData');
      if (data !== null) {
        const parsedData: User[] = JSON.parse(data);
        setUserNames(parsedData);
      }
    } catch (error) {
      console.error('Error fetching user data from localStorage:', error);
    }
  }, []);
  
  const schema = yup.object().shape({
    email: yup.string().trim().email().required("Email is required field*"),
    password: yup.string().required("Password is a required field*"),
  });

  const formik = useFormik<User>({ 
    initialValues: initialValues,
    validationSchema: schema,  
    onSubmit: (values, { resetForm }) => {
      const user = userNames.find(
        user => user.email === values.email && user.password === values.password
      );

      if (user) {
        setUser(user);
        console.log(user);
        navigate('/profile');
      } else {
        setInvalidError("Invalid email or password. Please try again later.");
        formik.setErrors({ email: "Invalid email or password", password: "Invalid email or password" });
      }

      resetForm();
    }
  });

  return (
    <>
      <Container fluid>
        <Row className="">
          <Col className="p-4 wlc_card" sm={12} md={12} lg={5}>
            <Card className="p-4 main_card">
              <h2><strong>Welcome Back</strong></h2>
              <p>Please Enter Your Details</p>
              <div className="d-flex">
                <Button className="col-6 button bg-light text-dark Submit_button border-0 btn-outline-primary"><label className="w-100 h-100 mt-1 bussines_button"><input type="radio" name="for" defaultChecked /> For Business</label> </Button>
                <Button className="col-6 button ml-1 bg-light text-dark Submit_button border-0"><label className="w-100 h-100 mt-1 enq_button"><input type="radio" name="for" /> For Enquiry</label></Button>
              </div>
              <br />
              {invalidError && <p className="Error_Msg">{invalidError}</p>}
              <Form className="" onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label><strong>Email</strong></Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FiMail /></InputGroup.Text> 
                    <Form.Control className="radius" type="email" placeholder="Enter your email"  value={formik.values.email} onChange={formik.handleChange}  />
                  </InputGroup>
                  <p className="Error_Msg">{formik.errors.email}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label><strong>Password</strong></Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FiLock /></InputGroup.Text> 
                    <Form.Control type="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
                  </InputGroup>
                  <p className="Error_Msg">{formik.errors.password}</p>
                </Form.Group>

                <Button className="Submit_button w-100" variant="primary" type="submit">
                  Gate Access
                </Button>
                
              </Form>
            </Card>
          </Col>
          
          <Col sm={12} md={12} lg={7} className="h-100 image_main">
            <Image className="Wel_img" src={img1}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Welcome1;

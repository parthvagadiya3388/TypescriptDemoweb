import React from "react";
import { Button, Card, Col, Container, Form, Image, Row, InputGroup } from "react-bootstrap";
import img1 from "../assets/images/office.jpg";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { TbHelpHexagonFilled } from "react-icons/tb";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { useFormik, FormikHelpers } from "formik";
import * as yup from 'yup';
import Footer from "./footer";
import Header from "./header";

interface FormValues {
  name: string;
  position: string;
  phone: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
}

const initialValues: FormValues = {
  name: "",
  position: "",
  phone: "",
  email: "",
  address: "",
  password: "",
  confirmPassword: "",
}

const Forbuissness: React.FC = () => {

  const schema = yup.object().shape({
    name: yup.string().trim().required("Name is a required field*"),
    position: yup.string().trim().required("Position is a required field*"),
    phone: yup.string().trim().required("Phone is a required field*"),
    email: yup.string().trim().email().required("Email is a required field*"),
    address: yup.string().trim().required("Address is a required field*"),
    password: yup.string().trim().required("Password is a required field*"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords must match").required("Confirm Password is a required field*"),
  });

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values, { resetForm }: FormikHelpers<FormValues>) => {
      console.log(values);

      const existingData = JSON.parse(localStorage.getItem('formData') || '[]');

      existingData.push(values);

      localStorage.setItem('formData', JSON.stringify(existingData));

      resetForm();
    }
  });

  return (
    <div>
      <Header />
      <Container fluid>
        <Row className="">
          <Col className="p-4 wlc_card align-content-center" sm={12} md={12} lg={6}>
            <Card className="p-4 main_card">
              <h2 className="container"> <strong>Connect with our partnerships team</strong> </h2>
              <p className="container"> We're always looking to work with the best spaces around the world. </p>
              <Form onSubmit={formik.handleSubmit}>
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
                        <Form.Control
                          className="radius"
                          type="text"
                          placeholder="Enter your name"
                          id="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                        />
                      </InputGroup>
                      <p className="Error_Msg">{formik.errors.name}</p>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Position</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <TbHelpHexagonFilled />
                        </InputGroup.Text>
                        <Form.Control
                          className="radius"
                          type="text"
                          placeholder="Enter your position"
                          id="position"
                          value={formik.values.position}
                          onChange={formik.handleChange}
                        />
                      </InputGroup>
                      <p className="Error_Msg">{formik.errors.position}</p>
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
                        <Form.Control
                          className="radius"
                          type="email"
                          placeholder="Enter your email"
                          id="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                      </InputGroup>
                      <p className="Error_Msg">{formik.errors.email}</p>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Phone</strong>
                      </Form.Label>
                      <PhoneInput
                        country={"in"}
                        // id="phone"
                        value={formik.values.phone}
                        onChange={(value: string) => formik.setFieldValue("phone", value)}
                      />
                      <p className="Error_Msg">{formik.errors.phone}</p>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Address</strong>
                      </Form.Label>
                      <Form.Control
                        className="radius"
                        as="textarea"
                        type="text"
                        id="address"
                        placeholder="Enter your workspace address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                      />
                      <p className="Error_Msg">{formik.errors.address}</p>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Password</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <MdOutlinePassword />
                        </InputGroup.Text>
                        <Form.Control
                          className="radius"
                          type="password"
                          placeholder="Enter your password"
                          id="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                      </InputGroup>
                      <p className="Error_Msg">{formik.errors.password}</p>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Confirm Password</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <MdOutlinePassword />
                        </InputGroup.Text>
                        <Form.Control
                          className="radius"
                          type="password"
                          placeholder="Confirm your password"
                          id="confirmPassword"
                          value={formik.values.confirmPassword}
                          onChange={formik.handleChange}
                        />
                      </InputGroup>
                      <p className="Error_Msg">{formik.errors.confirmPassword}</p>
                    </Form.Group>
                  </Col>

                </div>
                <div className="container">
                  <Button className="Submit_button w-100 p-2" variant="primary" type="submit" disabled={!formik.isValid}>
                    Contact for create a workspaces
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

export default Forbuissness;

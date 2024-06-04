import React, { useState, ChangeEvent } from 'react';
import { Button, Card, Col, Container, Form, Row, InputGroup, Modal } from "react-bootstrap";
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { IoBagCheckSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaEye, FaUser, FaUserShield, FaUsers } from "react-icons/fa";
import { MdDeleteForever, MdEmail } from "react-icons/md";
import Profile_header from './profile-header';
import { LuUsers } from 'react-icons/lu';
import { GoLocation } from 'react-icons/go';
import { TiEdit } from 'react-icons/ti';
import { TbHelpHexagonFilled } from 'react-icons/tb';
import PhoneInput from 'react-phone-input-2';

interface Employee {
  userName: string;
  userEmail: string;
  position: string;
}

const initialEmployees: Employee[] = [
  { userName: "Cameron Williamson", userEmail: "cameronwilliamsona@gmail.com", position: "Nursing Assistant" },
  { userName: "Brooklyn Simmons", userEmail: "brooklynsimmons@gmail.com", position: "President of Sales" },
  { userName: "Jenny Wilson", userEmail: "jennywilson@gmail.com", position: "Medical Assistant" },
  { userName: "Jacob Jones", userEmail: "jacobjones@gmail.com", position: "Web Designer" },
  { userName: "Wade Warren", userEmail: "wadewarren@gmail.com", position: "President of Sales" },
  { userName: "Savannah Nguyen", userEmail: "savannahnguyen@gmail.com", position: "Nursing Assistant" },
  { userName: "Cody Fisher", userEmail: "codyfisher@gmail.com", position: "Dog Trainer" },
  { userName: "Leslie Alexander", userEmail: "lesliealexander@gmail.com", position: "Medical Assistant" },
  { userName: "Ralph Edwards", userEmail: "ralphedwards@gmail.com", position: "Web Designer" }
];

const Employelist: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [show, setShow] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (indexDelete: number) => {
    const updatedEmployees = employees.filter((_, index) => index !== indexDelete);
    setEmployees(updatedEmployees);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <Profile_header />

      <Modal show={show} onHide={handleClose}>
        <Card className="p-4 togl_card">
          <div className="d-flex">
            <Col md={10} className="p-0">
              <h2><strong>Add Employees</strong></h2>
            </Col>
            <Col md={2} className="text-end">
              <button type="button" className="btn-close toggle_button m-2 ml-2" onClick={handleClose}></button>
            </Col>
          </div>
          <p>Lorem ipsum dolor sit amet.</p> <hr className='text-primary' />

          <Form>
            <div className='d-flex flex-wrap'>
              <Col md={12}>
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

              <Col md={12}>
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
                    <strong>Phone</strong>
                  </Form.Label>
                  <PhoneInput country={"in"}  />
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
                    <Form.Control className="radius" type="text" placeholder="Enter your position" id="position" />
                  </InputGroup>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Access</strong>
                  </Form.Label>
                  <Form.Select className="radius">
                    <option value="Give a access" selected>Give access</option>
                    <option value="access">Access</option>
                    <option value="denied">Denied</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </div>
          </Form><br />

          <div className='d-flex justify-content-end'>
            <Button className="Submit_button btn btn-outline-primary" variant='light' onClick={handleClose}>Cancel</Button>
            <Button className="Submit_button ml-2" variant="primary" type="submit">Add Employee</Button>
          </div>
        </Card>
      </Modal>

      <Container>
        <Row>
          <div className='pt-2 text-md-start text-sm-center text-center'>
            <h2>My Profile</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <Col md={3} className='p-2'>
            <div className="p-3 Profile_Side_bar border_radias">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link  btn btn-primary radius text-start text-dark" to="/profile">
                    <FaUser /> Personal Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  btn btn-primary radius text-start text-dark" to="#">
                    <IoBagCheckSharp /> Space Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-dark btn btn-primary radius text-start text-white" to="#">
                    <LuUsers /> Employees
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark btn btn-primary radius text-start" to="#">
                    <FaUsers /> Customers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark btn btn-primary radius text-start" to="/search">
                    <GoLocation /> Change Location
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark btn btn-primary radius text-start" to="#">
                    <RiLockPasswordLine /> Change Password
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark btn btn-primary radius text-start" to="#">
                    <AiOutlineUserDelete /> Delete Account
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col className="wlc_card align-content-center" md={9}>
            <Card className="p-4 main_card List_card">
              <div className='d-flex justify-content-between flex-wrap'>
                <Col md={5} sm={12} className='Employr_title'>
                  <h4><FaUserShield /> Employees</h4>
                </Col>
                <Col md={7} sm={12} className='d-flex justify-content-between flex-wrap w-100'>
                  <div className="form-group has-search Input_button_emp">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Employee..."
                      value={searchInput}
                      onChange={handleSearchInputChange}
                    />
                  </div>
                  <Button className='border_radias form-control Input_button_emp' onClick={handleShow}>Add Employee</Button>
                </Col>
              </div>
              <br />
              <div className="table-responsive">
                <table className="table table-hover w-100 table_Div">
                  <thead className="thead-light">
                    <tr className='Table_header'>
                      <th>User Name</th>
                      <th>User Email</th>
                      <th>Position</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.filter((employee) => {
                      const searchString = searchInput.toLowerCase();
                      return (
                        employee.userName.toLowerCase().includes(searchString) ||
                        employee.userEmail.toLowerCase().includes(searchString) ||
                        employee.position.toLowerCase().includes(searchString)
                      );
                    }).map((employee, index) => (
                      <tr key={index}>
                        <td>{employee.userName}</td>
                        <td>{employee.userEmail}</td>
                        <td>{employee.position}</td>
                        <td>
                          <button className='me-2 border-0 bg-transparent text-dark'>
                            <FaEye />
                          </button>
                          <button className='me-2 border-0 bg-transparent text-dark'>
                            <TiEdit />
                          </button>
                          <button className='me-2 border-0 bg-transparent text-dark' onClick={() => handleDelete(index)}>
                            <MdDeleteForever />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Employelist;

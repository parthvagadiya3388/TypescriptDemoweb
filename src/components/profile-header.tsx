import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Offcanvas, Row, ListGroup } from 'react-bootstrap';
import { FaCaretDown, FaSignOutAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import img4 from '../assets/images/profile.jpeg'; 
import { AuthContext } from '../context/AuthContext';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFirstName, setLastName } from '../redux/reducer/nameSlice';
// import { RootState } from '../redux/store';
import usePersonStore from '../zustand/store';

interface Props {}

const ProfileHeader: React.FC<Props> = () => {

  const {firstName , lastName , updateFirstName , updateLastName} = usePersonStore();

  console.log("---first last name -::::" , firstName,lastName);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const dispatch = useDispatch();
  // const firstName = useSelector((state: RootState) => state.name.firstName);
  // const lastName = useSelector((state: RootState) => state.name.lastName);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.name) {
      const [first, last] = user.name.split(' ');
      // dispatch(setFirstName(first));
      // dispatch(setLastName(last));
      updateFirstName(first);
      updateLastName(last);
    }
  }, [user]);
  
  const fullname = `${firstName} ${lastName}`;

  return (
    <>
      <Container>
        <Row className="align-items-center d-flex flex-wrap pt-2">
          <Col xs={6}>
            <h4 className="d-inline-block">
              <NavLink className="navbar-brand" to="/Welcome">
                <strong>
                  <i className="fa-solid fa-film"></i> BusinessPass
                </strong>
              </NavLink>
            </h4>
          </Col>
          <Col xs={6} className="text-end d-flex justify-content-end align-items-center p-0">
            <img src={img4} alt="Profile" className="rounded-circle" width="40" />
            <span className="ms-1 me-0">{fullname}</span>
            <Button className="bg-white text-dark border-0" onClick={handleShow}>
              <FaCaretDown />
            </Button>
          </Col>
        </Row>

        <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <hr />
            <div className="text-center mb-4">
              <img src={img4} alt="Profile" className="rounded-circle" width="60" />
              <p>{fullname}</p>
            </div>
            <hr />
            <ListGroup variant="flush">
              <Link to="/profile" className="text-decoration-none">
                <ListGroup.Item action className="listGroup_profile text-primary">
                  Personal Information
                </ListGroup.Item>
              </Link>
              <Link to="/employelist" className="text-decoration-none">
                <ListGroup.Item action>
                  Employees
                </ListGroup.Item>
              </Link>
              <ListGroup.Item action>Space Information</ListGroup.Item>
              <ListGroup.Item action>Customers</ListGroup.Item>
              <Link to="/search" className="text-decoration-none">
                <ListGroup.Item action>Change Location</ListGroup.Item>
              </Link>
              <ListGroup.Item action>Change Password</ListGroup.Item>
              <ListGroup.Item action>Delete Account</ListGroup.Item>
            </ListGroup>
            <hr />
            <div className="text-center mt-4">
              <Link to="/welcome">
                <Button variant="outline-danger">
                  Sign out <FaSignOutAlt />
                </Button>
              </Link>
            </div>
            <hr />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
      <hr />
    </>
  );
};

export default ProfileHeader;

import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import PaymentCard from "./payment-card";
import ProductCard from "./product-card";
import { ProductContext } from "../context/Productcontext";
import ProfileHeader from "./profile-header";
import { Link } from "react-router-dom";

const OrderConfirm: React.FC = () => {
  const { selectedProduct } = useContext(ProductContext);

  if (!selectedProduct) {
    return (
      <Container>
        <Row>
          <Col>
            <p>Loading...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <ProfileHeader />
      <Container>
        <Row>        
          <Col className="wlc_card" sm={12} md={12} lg={7}>
            <Link to="/search">
              <Button className='btn btn-light btn-outline-dark Back_button'>
                <IoIosArrowBack /> Back
              </Button>
            </Link>
            <h4 className="pb-2">
              <strong> Order confirmation</strong>
            </h4>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
            <hr />
            <div className="card mt-2 border_radias p-2">
              <ProductCard
                image={selectedProduct.image}
                title={selectedProduct.title}
                location={selectedProduct.location}
                rating={selectedProduct.rating}
                price={selectedProduct.price}
                showButton={false}
                cardbackside={true}
                ratingShow={false}
              />
            </div>
          </Col>
          <Col sm={12} md={12} lg={5}>
            <div className="w-100 h-auto">
              <PaymentCard location={selectedProduct.location} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OrderConfirm;

import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/Productcontext';

interface PaymentCardProps {
  location: string;
}

const PaymentCard: React.FC<PaymentCardProps> = (props) => {
  const [amount, setAmount] = useState<number>(0);
  const { selectedProduct } = useContext(ProductContext);

  useEffect(() => {
    if (selectedProduct && selectedProduct.price) {
      setAmount(parseFloat(selectedProduct.price));
    }
  }, [selectedProduct]);

  const tax: number = amount * 0.1;
  const total: number = amount + tax;

  return (
    <Card className='border_radias'>
      <Card.Body className='Payment_card'>
        <Card.Title>Order Summary</Card.Title>
        <Card.Text> {props.location}</Card.Text>
        <hr />

        <div className='d-flex justify-content-between'>
          <Card.Text> Amount</Card.Text>
          <Card.Title>${selectedProduct?.price}.00</Card.Title>
        </div>
        <div className='d-flex justify-content-between'>
          <Card.Text>Tax</Card.Text>
          <Card.Title>${tax.toFixed(2)}</Card.Title>
        </div>

        <hr className='HRtage' />

        <div className='d-flex justify-content-between'>
          <Card.Title>Order Total</Card.Title>
          <Card.Title>${total.toFixed(2)}</Card.Title>
        </div>
        <br />

        <Button className='w-100 Oder_coupun'><a href="#">Add coupon code here</a></Button>
        <Link to="https://buy.stripe.com/test_8wMeXU2bZ5WsgAUaEG">
          <Button variant="primary" className='w-100 border_radias mt-4'>checkout</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PaymentCard;

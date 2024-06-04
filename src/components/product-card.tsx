import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

interface ProductcardProps {
  image: string;
  title: string;
  rating: number;
  location: string;
  price: number;
  showButton?: boolean;
  cardbackside?: boolean;
  ratingShow?: boolean;
  onBookNow?: () => void;
}

const Productcard: React.FC<ProductcardProps> = ({
  image,
  title,
  rating,
  location,
  price,
  showButton = true,
  cardbackside = true,
  ratingShow = true,
  onBookNow,
}) => {
  return (
    <div className="d-flex flex-wrap product_card_body_div">
      <div className="col-sm-4 pl-0 pr-0 bg-black Product_imag_div">
        <img
          src={image}
          className="w-100 h-100 object-fit-cover product_image"
          alt="Product"
        />
      </div>
      <div className="card-body col-sm-8 p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{title}</h5>
          {ratingShow && (
            <span className="badge bg-warning text-white">
              {rating} ★
            </span>
          )}
        </div>
        <p className="card-text p-0 m-0">{location}</p> <br />
        {showButton && (
          <Link
            to="/order"
            className="btn btn-light btn-outline-primary border_radias"
            onClick={onBookNow}
          >
            Book Now!
          </Link>
        )}
        {cardbackside && (
          <div className="">
            <p className="badge bg-warning text-white m-0">{rating} ★</p>
            <span>(12k Ratings)</span>
            <div className="d-flex justify-content-between">
              <h6 className="p-0">
                <strong className="p-0 m-0">{price}.00 USD</strong>
              </h6>
              <button className="border-0 text-danger Payment_delet_button">
                <MdDelete />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productcard;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Home/Navbar";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { FaUndoAlt } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa";
import { PiUserCircleFill } from "react-icons/pi";

import { NavLink } from "react-router-dom";

export default function SingleProduct() {
  const { id } = useParams();
  const [items, setItems] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      console.log(res.data);
      return setItems(res.data);
    });
  }, [id]);
  let finalPrice = items.price - items.price * (items.discountPercentage / 100);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 border shadow ">
            <img
              src={items.images?.[0] || items.images}
              alt="image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 ">
            <h2>{items.title}</h2>
            <h6 className="text-secondary my-3">{items.brand}</h6>
            <h5 className="my-3">{items.description}</h5>
            <div className="d-flex align-items-center my-3 ">
              <span className="mr-3 h4 ">{finalPrice.toFixed(2)}$</span>
              <span>
                <del className="text-danger h4 d-inline-block">
                  {items.price}$
                </del>{" "}
              </span>
              <span
                className="badge badge-danger badge-pill ml-4 px-2 py-2"
                style={{ fontSize: "12px" }}
              >
                🔥 Save {Math.round(items.discountPercentage)}%
              </span>
            </div>
            <h6 className="text-success">
              {items.stock} {items.availabilityStatus}
            </h6>

            <div className="d-flex my-2 ">
              <p>
                {Array.from({ length: Math.round(items.rating) }, (_, i) => (
                  <FaStar key={i} color="#ffd43b" size={23} />
                ))}

                {Array.from(
                  { length: 5 - Math.round(items.rating) },
                  (_, i) => (
                    <FaRegStar
                      key={Math.round(items.rating) + i}
                      color="#ffd43b"
                      size={23}
                    />
                  ),
                )}
              </p>
            </div>

            <div className="mt-2">
              <div
                className="border border-success rounded px-3 py-2 mb-3 text-success "
                style={{ backgroundColor: "#effff5", width: "fit-content" }}
              >
                <HiOutlineShieldCheck size={24} className="mr-2" />
                {items.warrantyInformation}
              </div>

              <div
                className="border border-primary rounded px-3 py-2 text-primary"
                style={{ backgroundColor: "#f1f7ff", width: "fit-content" }}
              >
                <FaUndoAlt size={18} className="mr-2" />
                {items.returnPolicy}
              </div>
            </div>
            <NavLink className="btn btn-primary text-white btn-block mt-4  ">
              Add To Cart
            </NavLink>
          </div>
          {items.reviews?.map((review) => {
            return (
              <div
                className="col-md-6 col-lg-4  mt-5"
                style={{ backgroundColor: "#fff" }}
                key={review.date}
              >
                <div className="border pt-3 px-3 shadow">
                  <div className="d-flex align-items-center">
                    <div className="mr-2">
                      <PiUserCircleFill size={50} />
                    </div>
                    <div className="d-flex flex-column">
                      <h4>{review.reviewerName}</h4>
                      <h6 className="text-secondary">{review.reviewerEmail}</h6>
                    </div>
                  </div>
                  <div className="d-flex">
                    <p>
                      {Array.from(
                        { length: Math.round(review.rating) },
                        (_, i) => (
                          <FaStar key={i} color="#ffd43b" size={23} />
                        ),
                      )}

                      {Array.from(
                        { length: 5 - Math.round(review.rating) },
                        (_, i) => (
                          <FaRegStar
                            key={Math.round(review.rating) + i}
                            color="#ffd43b"
                            size={23}
                          />
                        ),
                      )}
                    </p>
                  </div>
                  <p>Reviewed in {review.date}</p>
                  <p> {review.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

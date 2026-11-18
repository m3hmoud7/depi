import { useEffect, useState } from "react";
import Navbar from "./Home/Navbar";
import axios from "axios";
import { FaStar, FaRegStar } from "react-icons/fa";
export default function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setItems(res.data.products));
  }, []);
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container mt-3">
        <div className="row">
          {items.map((item) => {
            return (
              <div className="col-md-4  mb-3  " key={item.id}>
                <div className="card ">
                  <img className="img-fluid" src={item.images[0]} alt="..." />
                  <div className="card-body">
                    <h5 className=" text-center">{item.title}</h5>
                    <p className=" text-center">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center px-3">
                      <p>
                        {Array.from(
                          { length: Math.round(item.rating) },
                          (_, i) => (
                            <FaStar key={i} color="#ffd43b" size={23} />
                          ),
                        )}

                        {Array.from(
                          { length: 5 - Math.round(item.rating) },
                          (_, i) => (
                            <FaRegStar
                              key={Math.round(item.rating) + i}
                              color="#ffd43b"
                              size={23}
                            />
                          ),
                        )}
                      </p>
                      <span>{item.price}$</span>
                    </div>

                    <a href="#" className="btn btn-primary btn-block m-0">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

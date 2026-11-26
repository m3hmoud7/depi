import { FaStar, FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function Product({ item }) {
  const { addItem } = useCart();
  return (
    <div className="col-md-6 col-lg-4  mb-3" key={item.id}>
      <div className="card ">
        <img className="img-fluid" src={item.images[0]} alt="..." />
        <div className="card-body">
          <h5 className=" text-center">{item.title}</h5>
          <p className=" text-center">{item.description}</p>
          <div className="d-flex justify-content-between align-items-center px-3">
            <p>
              {Array.from({ length: Math.round(item.rating) }, (_, i) => (
                <FaStar key={i} color="#ffd43b" size={23} />
              ))}

              {Array.from({ length: 5 - Math.round(item.rating) }, (_, i) => (
                <FaRegStar
                  key={Math.round(item.rating) + i}
                  color="#ffd43b"
                  size={23}
                />
              ))}
            </p>
            <span>{item.price}$</span>
          </div>
          <div className="w-100 d-flex  ">
            <NavLink
              to={`/singleproducts/${item.id}`}
              className="btn btn-dark text-white  w-25 mr-1 "
            >
              Details
            </NavLink>
            <button
              onClick={() => addItem(item)}
              className="btn btn-primary text-white w-75 my-auto "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

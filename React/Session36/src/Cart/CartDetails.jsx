import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

export default function CartDetails() {
  const {
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    cartTotal,
    totalUniqueItems,
    isEmpty,
    emptyCart,
  } = useCart();
  return (
    <div className="container">
      <div className="row">
        {isEmpty ? (
          <div className="d-flex flex-column justify-content-center align-items-center w-100 ">
            <h1>Your Cart Is Empty </h1>
            <img src="./public/img/cart.png" alt="cart" height={"400px"} />
          </div>
        ) : (
          <div className="col-12 mx-auto">
            <h4 className="text-center">
              Details of Cart{" "}
              <span className="badge badge-primary mx-1">
                {totalUniqueItems}
              </span>{" "}
              <button onClick={() => emptyCart()} className="btn btn-danger">
                Empty Cart
              </button>
            </h4>
            <table className="table table-dark text-center table-bordered">
              <thead>
                <tr>
                  <th>image</th>
                  <th>number</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>One Item Price</th>
                  <th>Total Price</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {items.map((item, index) => {
                  return (
                    <tr className="align-middle" key={item.id}>
                      <td>
                        <img
                          src={item.images[0]}
                          alt="image"
                          style={{ height: "100px" }}
                        />
                      </td>
                      <td className="align-middle">{index + 1}</td>
                      <td className="align-middle">{item.title}</td>
                      <td className="align-middle">{item.quantity}</td>
                      <td className="align-middle">{Math.ceil(item.price)}$</td>
                      <td className="align-middle">
                        {Math.ceil(item.price * item.quantity)} $
                      </td>
                      <td className="align-middle">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="btn btn-warning"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="btn btn-success mx-1"
                        >
                          +{" "}
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn btn-danger"
                        >
                          &times;
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={3} className="align-middle">
                    Total
                  </th>
                  <th className="align-middle">{totalItems}</th>
                  <th className="align-middle">------</th>
                  <th className="align-middle">{Math.ceil(cartTotal)}$</th>
                  <th className="align-middle">
                    <NavLink to="/products" className=" btn btn-primary">
                      Continue Shopping
                    </NavLink>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

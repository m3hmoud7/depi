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
          <div className="d-flex flex-column justify-content-center align-items-center w-100">
            <h1>Your Cart Is Empty</h1>
            <img src="/img/cart.png" alt="cart" height="400" />
          </div>
        ) : (
          <div className="col-12 col-lg-10 mx-auto">
            <h4 className="text-center mb-3">
              Details of Cart{" "}
              <span className="badge badge-primary mx-1">
                {totalUniqueItems}
              </span>{" "}
              <button
                onClick={() => emptyCart()}
                className="btn btn-danger btn-sm"
              >
                Empty Cart
              </button>
            </h4>

            <table className="table table-dark text-center table-bordered cart-table w-100">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Operation</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="align-middle">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        style={{ height: "60px" }}
                      />
                    </td>
                    <td className="align-middle">{item.title}</td>
                    <td className="align-middle">{item.quantity}</td>
                    <td className="align-middle">{Math.ceil(item.price)}$</td>
                    <td className="align-middle">
                      {Math.ceil(item.price * item.quantity)}$
                    </td>
                    <td className="align-middle">
                      <div className="d-flex flex-row justify-content-center">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="btn btn-warning btn-sm"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="btn btn-success btn-sm mx-1"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn btn-danger btn-sm"
                        >
                          &times;
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <th colSpan={2} className="align-middle">
                    Total
                  </th>
                  <th className="align-middle">{totalItems}</th>
                  <th className="align-middle">—</th>
                  <th className="align-middle">{Math.ceil(cartTotal)}$</th>
                  <th className="align-middle">
                    <NavLink to="/products" className="btn btn-primary btn-sm">
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

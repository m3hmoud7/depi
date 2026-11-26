import Navbar from "../Home/Navbar";
import CartDetails from "./CartDetails";
import { useEffect } from "react";

export default function CartPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CartDetails />
    </div>
  );
}

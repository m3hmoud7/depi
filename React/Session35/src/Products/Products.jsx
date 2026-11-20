import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./../Home/Navbar";
import Product from "./Product";
export default function Products() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const searchValue = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <div className="col-md-10 mx-auto mb-5">
            <input
              onChange={searchValue}
              type="text"
              placeholder="Search"
              name="search"
              className="form-control w-100"
              value={search}
            />
          </div>
          {items.map((item) => {
            return search == "" ? (
              <Product item={item} />
            ) : search == item.id ? (
              <Product item={item} />
            ) : item.title.toLowerCase().includes(search.toLowerCase()) ? (
              <Product item={item} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

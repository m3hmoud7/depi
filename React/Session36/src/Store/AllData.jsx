import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const dataContext = createContext();

export default function AllData({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setItems(res.data.products));
  }, []);
  return <dataContext.Provider value={items}>{children}</dataContext.Provider>;
}

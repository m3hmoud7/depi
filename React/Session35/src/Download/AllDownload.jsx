import Navbar from "../Home/Navbar";
import Contact from "./Contact";
import { useEffect } from "react";

export default function AllDownload() {
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
      <Contact />
    </div>
  );
}

import About from "./Home/About";
import Age from "./Home/Age";
import Application from "./Home/Application";
import Cart from "./Home/Cart";
import Device from "./Home/Device";
import Download from "./Home/Download";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Navbar from "./Home/Navbar";

export default function App() {
  const users = [
    { id: 1, firstName: "Mahmoud", lastName: "ahmed", age: 30, color: "red" },
    { id: 2, firstName: "ali", lastName: "sayed", age: 25, color: "blue" },
    { id: 3, firstName: "esam", lastName: "mohamed", age: 28, color: "green" },
    { id: 4, firstName: "khaled", lastName: "zaki", age: 40, color: "gray" },
    { id: 5, firstName: "reda", lastName: "abdou", age: 21, color: "purple" },
    {
      id: 6,
      firstName: "karim",
      lastName: "abdullah",
      age: 27,
      color: "orange",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Device />
      <Age />
      <Download />
      <Application />
      <Footer />
      <Cart data={users} />
    </div>
  );
}

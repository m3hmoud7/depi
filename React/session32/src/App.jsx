import About from "./Home/About";
import Age from "./Home/Age";
import Application from "./Home/Application";
import Device from "./Home/Device";
import Download from "./Home/Download";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Navbar from "./Home/Navbar";

export default function App() {
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
    </div>
  );
}

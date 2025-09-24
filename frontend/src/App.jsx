import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Navbar from "./components/Layout/Navbar/Navbar";
import Products from "./pages/Products";
import Footer from "./components/Layout/Navbar/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

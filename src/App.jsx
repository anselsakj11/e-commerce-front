import "./App.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import luggage from "./assets/luggage.webp";
import luggage2 from "./assets/luggage2.webp";
import luggage3 from "./assets/luggage3.webp";
import bag from "./assets/bag.webp";

const favProductsData = [
  {
    id: 1,
    name: "Carry-on",
    price: "30",
    imgUrl: luggage,
    material: "leather",
    category: "carry-on",
  },
  {
    id: 2,
    name: "Carry-on Flex",
    price: "5",
    imgUrl: bag,
    material: "plastic",
    category: "backpack",
  },
  {
    id: 3,
    name: "THe Bigger Carry-on",
    price: "88",
    imgUrl: luggage2,
    material: "metal",
    category: "duffel",
  },
  {
    id: 4,
    name: "Carry-Bag",
    price: "200",
    imgUrl: luggage3,
    material: "leather",
    category: "carry-on",
  },
  {
    id: 5,
    name: "Carry-on",
    price: "60",
    imgUrl: luggage,
    material: "leather",
    category: "carry-on",
  },
  {
    id: 6,
    name: "THe Bigger Carry-on",
    price: "100",
    imgUrl: bag,
    material: "plastic",
    category: "backpack",
  },
  {
    id: 7,
    name: "Carry-Bag",
    price: "190",
    imgUrl: luggage3,
    material: "metal",
    category: "duffel",
  },
  {
    id: 8,
    name: "Carry-on Flex",
    price: "145",
    imgUrl: luggage2,
    material: "leather",
    category: "carry-on",
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductFilterList from "./components/ProductFilterList/ProductFilterList.tsx";
import Header from "./components/Header/Header.tsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductFilterList />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

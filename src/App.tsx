import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import CategoryPage from "./pages/category";
import CheckoutPage from "@/pages/checkout";
import ProductPage from "./pages/product";
import OrderConfirmedPage from "@/pages/order-confirmed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
      </Routes>
    </Router>
  );
};

export default App;

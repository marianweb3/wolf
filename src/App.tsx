import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import CategoryPage from "./pages/category";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;

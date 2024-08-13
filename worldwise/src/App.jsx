import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "@screens/Home";
import Pricing from "@screens/Pricing";
import ProductCard from "@screens/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<ProductCard />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

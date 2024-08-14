import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "@screens/Home";
import Pricing from "@screens/Pricing";
import ProductCard from "@screens/Product";
import ErrorPage from "@screens/Error";
import { Layout } from "@screens/Layout";
import Login from "@screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<ProductCard />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<Layout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

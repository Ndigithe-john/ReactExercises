import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomePage from "@screens/Home";
import Pricing from "@screens/Pricing";
import ProductCard from "@screens/Product";
import ErrorPage from "@screens/Error";
import AppLayout from "@screens/Layout";
import Login from "@screens/Login";
import CityList from "@components/City";
import CountryList from "@components/CountryList";
import City from "@components/City/City";
import Form from "@components/Form";
import { CitiesProvider } from "@contexts/CitiesContext";
import { AuthProvider } from "@contexts/FakeAuthContext";
import ProtectedRoute from "@screens/Protected/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<ProductCard />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;

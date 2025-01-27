import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GlobalStyles from "@styles/GlobalStyles";

import Account from "@pages/Account";
import Bookings from "@pages/Bookings";
import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import PageNotFound from "@pages/PageNotFound";
import Settings from "@pages/Settings";
import NewUsers from "@pages/Users";
import AppLayout from "@ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<NewUsers />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Unauthorized from './components/Unauthorized';
import Navbar from './components/Navbar';
import Register from './components/Register';
import RequireAuth from './components/RequiredAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AIChallenger from './pages/AIChallenger';
import VendorDataEnrichment from './pages/VendorDataEnrichment';
import DuplicateInventoryReduction from './pages/DuplicateInventoryReduction';

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem('user');
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('user', auth);
  }, [auth]);

  const LayoutWithNavbar = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const ROLES = {
    User: 2001,
    Buyer: 1984,
    Admin: 5150,
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route path='linkpage' element={<LinkPage />} /> */}
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Buyer]} />}>
          <Route element={<LayoutWithNavbar />}>
            <Route path="aichallenger" element={<AIChallenger />} />
            <Route
              path="vendordataenrichment"
              element={<VendorDataEnrichment />}
            />
            <Route
              path="duplicateinventoryreduction"
              element={<DuplicateInventoryReduction />}
            />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

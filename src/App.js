import React from "react";
import { StrictMode } from "react";
import { Route, BrowserRouter as Router, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  const LayoutWithNavbar = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/github-action/home" element={<Home />} />
          <Route path="/github-action/" element={<LayoutWithNavbar />}>
            <Route path="/github-action/page1" element={<Page1 />} />
            <Route path="/github-action/page2" element={<Page2 />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
          <Route path="/github-action/login" element={<Login />} />
        </Routes>
      </Router>
    </StrictMode>
  );
}

export default App;

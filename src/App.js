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
      <Routes>
        {/* <Route path="/github-action/" element={<LayoutWithNavbar />}>
          <Route path="/github-action/page1" element={<Page1 />} />
          <Route path="/github-action/page2" element={<Page2 />} />
        </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </StrictMode>
  );
}

export default App;

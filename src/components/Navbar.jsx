import React from "react";
import { Link } from "react-router-dom";
const nevbar = {
  border: "1px solid gray",
  backgroundColor: "blue",
  alignItems: "space",
  height: "50px",
  justifyContent: "start",
  placeItems: "center",
  display: "flex",
};
const link = {
  fontSize: "larger",
  fontWeight: "bold",
  color: "white",
  textTransform: "uppercase",
  textDecoration: "none",
};

function Navbar() {
  return (
    <div id="navigation" style={nevbar}>
      <Link style={link} to="/">
        Logo
      </Link>
    </div>
  );
}

export default Navbar;

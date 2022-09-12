import React from "react";
import { Link } from "react-router-dom";

const nevbar = {
  border: "1px solid gray",
  backgroundColor: "blue",
  alignItems: "space",
  height: "50px",
  justifyContent: "space-evenly",
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

function Home() {
  return (
    <div id="navigation" style={nevbar}>
      <Link style={link} to="/github-action/page1">
        Page 1
      </Link>
      <Link style={link} to="/github-action/page2">
        Page 2
      </Link>
    </div>
  );
}

export default Home;

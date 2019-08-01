import React from "react";
import { Link } from "react-router-dom";

export default function PublicHome() {
  return (
    <div>
      <h1>Hello Public Home</h1>
      <Link to="/login">Go to Login</Link>
      <br /> <br />
      <Link to="/signup">Go to Signup</Link>
      <br /> <br />
      <Link to="/ads">Go to Ads</Link>
      <br /> <br />
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <h1>Hello Signup</h1>
      <Link to="/login">or Login</Link>
      <br />
      <br />
      <Link to="/">go to Public Home</Link>
    </div>
  );
}

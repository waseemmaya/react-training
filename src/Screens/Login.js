import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Hello Login</h1>
      <Link to="/signup">or Signup</Link>
      <br />
      <br />
      <Link to="/">go to Public Home</Link>
    </div>
  );
}

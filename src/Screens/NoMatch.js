import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      <h1>Hello NoMatch</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

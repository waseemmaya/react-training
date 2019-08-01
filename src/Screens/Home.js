import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Hello Private Home</h1>
      <Link to="/profile">Go to Profile</Link>
      <br /> <br />
      <Link to="/ads">Go to Ads</Link>
      <br /> <br />
      <Link to="/chats">Go to Chats</Link>
      <br /> <br />
      <Link to="/category">Go to Category</Link>
      <br /> <br />
    </div>
  );
}

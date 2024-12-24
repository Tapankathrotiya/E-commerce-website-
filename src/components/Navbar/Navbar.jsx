import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="top-bar">
        <p>A ONE STOP STORE, OF FINEST PRODUCTS, FOR YOUR FINEST NEEDS</p>
      </div>
      <nav className="main-nav">
        <div className="logo">e-commerce</div>
        <input type="text" placeholder="Search Here..." className="search-bar" />
        <ul className="nav-links">
          <li>HOME</li>
          <li>SHOP</li>
          <li>PRODUCTS</li>
          <li>ELEMENTS</li>
          <li>PAGES</li>
          <li>BLOG</li>
          <li>CONTACT US</li>
          <li>BUY NOW</li>
        </ul>
        <div className="auth-cart">
          <span>Sign In</span> | <span>Cart (0)</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

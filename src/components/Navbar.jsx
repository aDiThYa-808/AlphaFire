import React from "react";
import Logo from "../assets/Logo_02.png";


export default function Navbar() {
  const handleLogoClick = () => {
    window.location.reload; // Reload the page
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={handleLogoClick}>
          <img src={Logo} alt="Logo" style={{ width: "125px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Products and Services</a>
            </li>
          </ul>
          
          <a href="#footer" className="btn btn-primary btn-dark">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

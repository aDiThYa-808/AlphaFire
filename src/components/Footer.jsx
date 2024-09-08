import React from "react";
import { FaXTwitter } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footer_logo from "../assets/Logo_02.png";

export default function Footer() {
  return (
    <footer className="bg-dark py-5 text-light w-100" id="footer" style={{ overflowX: "hidden" }}>
      <div className="container-fluid px-0">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
          <div className="d-flex align-items-center gap-3 mb-4 mb-md-0">
            <a className="navbar-brand" href="#">
              <img src={footer_logo} alt="Logo" style={{ width: "180px" }} />
            </a>
          </div>
          <div className="text-muted text-center text-md-start mb-4 mb-md-0" style={{ maxWidth: "350px" }}>
            
            <div className="text-light h6 text-center">#No.726/3 Gopal Reddy Building, R.M Nagar, Main Road, Dodda Banaswadi, Bangalore-560043</div>
          </div>
          <div className="text-light h6 text-center">#No. 2-2-131/9/1,Dharmareddy Colony,Macha-Bollarum,Telangana-500010</div>
          <div className="text-muted text-center text-md-start mb-4 mb-md-0">
            <div className="text-decoration-none text-light h4">
              Contact Us
            </div>
            <div>
              <a href="tel:+919632461706"  className="text-decoration-none text-light h6">
                +91 9632461706
              </a>
              </div>
              <div>
              <a href="tel:+919686343807" className="text-decoration-none text-light h6">
                +91 9868343807
              </a>
            </div>
            <div>
              <a href="mailto:alphafiresafetyservices024@gmail.com" className="text-decoration-none text-light h6">
                alphafiresafetyservices024@gmail.com
              </a>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="h4 mb-4 text-center text-md-start">
              Connect with us
            </div>
            <div className="d-flex gap-4">
              <a href=" https://x.com/alphafire2013?t=fOnKYml_siw_h8Yngju2lw&s=08 " 
              target="_blank"
              className="text-light">
                <FaXTwitter size={40} />
              </a>
              
              <a href="https://www.linkedin.com/in/jeeva-s-311384326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank"
              className="text-light">
                <FaLinkedin size={40} />
              </a>
              <a href="https://www.instagram.com/alphafire.in?igsh=MTdlNmdjdmpoYnI0Nw=="  target="_blank" className="text-light">
                <FaInstagram size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

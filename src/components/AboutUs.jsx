import React from "react";
import './AboutUs.css'

export default function AboutUs() {
  return (
    <section id="about-us" className="py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div>
            <h2 className="display-4 mb-4 text-dark">About Us</h2>
            <p className="mb-4 text-muted">
            We at Alpha Fire & Safety Services specialize in supplying high-quality fire safety products and providing professional installation services. Our products are sourced from trusted vendors and adhere to industrial safety standards, ensuring reliability and effectiveness. With over 15 years of experience in the industry, we are dedicated to delivering exceptional service and satisfying installation solutions to our clients.
            </p>
            <p className="mb-4 text-muted">
            Our team consists of skilled professionals with extensive expertise in fire safety products and services. This experience has enabled us to thoroughly understand and address the specific needs of our clients. We take pride in our ability to offer tailored solutions and maintain the highest standards of quality in both our products and services.
            </p>
            
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="card bg-white shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Our Vision</h3>
                <p className="card-text">To lead the global fire safety industry with innovative solutions that prevent and manage fire emergencies.</p>
              </div>
            </div>
            <div className="card bg-white shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Our Values</h3>
                <p className="card-text">Innovation, reliability, integrity, customer focus, safety, sustainability and collaborations.</p>
              </div>
            </div>
            <div className="card bg-white shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Our Team</h3>
                <p className="card-text">A skilled team committed to delivering top-notch fire safety solutions with precision and care.</p>
              </div>
            </div>
            <div className="card bg-white shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Our Approach</h3>
                <p className="card-text">A proactive and strategic approach to fire safety, ensuring effective solutions and protection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

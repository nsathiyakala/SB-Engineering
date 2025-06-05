import React from "react";


export default function Footer25() {
  return (
    <footer className=" footer-section footer25">
      <div className="container p-0">
        <div className="row g-0">
          {/* Left Yellow Section */}
          <div className="col-lg-3 footer-yellow d-flex flex-column justify-content-center align-items-start p-5 footer1">
            <img src="/images/header-logo.png" alt="SB Engineers Logo" className="footer-logo mb-3" />
            <h4 className="footer-heading mb-3">Get Started With Us</h4>
            <p className="footer-text mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
            </p>
            <button className="footer-button">Reach Us Now</button>
          </div>

          {/* Right Black Section */}
          <div className="col-lg-9 footer-black p-5 ">
            <div className="row">
              {/* About */}
              <div className="col-md-5 mb-4 pt-5 pe-5">
                <h5 className="footer-subheading">SB Engineers</h5>
                <p className="footer-info">
                  SB Engineers is a premier engineering design firm dedicated to delivering comprehensive solutions for a diverse range of structural projects.
                </p>
              </div>

              {/* Links */}
              <div className="col-md-3 mb-4 pt-5">
                <h5 className="footer-subheading">Quick Links</h5>
                <ul className="footer-links list-unstyled">
                  <li>Services</li>
                  <li>Why SB Engineers</li>
                  <li>Projects</li>
                  <li>About Us</li>
                  <li>Get a Quote</li>
                  <li>Careers</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-md-4 mb-4 pt-5">
                <h5 className="footer-subheading">Quick Contact</h5>
                <p className="footer-info">
                  4th West Cross Road, Gandhi Nagar,<br />
                  Katpadi Vellore, Tamilnadu.
                </p>
                <p className="footer-info">
                  If you have any questions or need help,<br />
                  feel free to contact with our team.
                </p>
                <p className="footer-phone">
                  📞 +91-9787447307
                </p>
              </div>
            </div>
          </div>
        </div>
               

        {/* Bottom Strip */}
        
       
      </div>
      <div className="footer-bottom  py-4 ">
        <div className="container">
          Copyright 2025 © SB Engineers. Concept by repute.
        </div>
          
        </div>

    </footer>
  );
}

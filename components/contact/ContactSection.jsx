import React from "react";

const ContactSection = () => {
  return (
    <div className="container contact-card my-5">
      <div className="row no-gutters shadow-lg rounded overflow-hidden">
        {/* Left Side - Image with Overlay Text */}
        <div className="col-md-5 p-a50">
          <div className="contact-left"></div>
          {/* <div className="contact-overlay text-white p-4">
            <h5 className="fw-bold mb-3">Leading Way In Building & Civil Construction!</h5>
            <p className="mb-3">
              Yet those embrace change are thriving, building bigger, better, faster & stronger products than ever before!
            </p>
            <p className="signature mb-0">Jeremy Wade</p>
            <small>- Founder</small>
          </div> */}
        </div>

        {/* Right Side - Form */}
        <div className="col-md-7 bg-white p-4">
          <h5 className="fw-bold mb-2">Get In Touch</h5>
          <p className="text-muted mb-4">
            Complete control over products allows us to ensure our customers receive the best quality prices and service.
            We take great pride in everything that we do in our factory.
          </p>

          <form>
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option>Select Your Service</option>
                  <option>Construction</option>
                  <option>Renovation</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="3" placeholder="Additional Details!" />
            </div>
            <button type="submit" className="btn submit-btn w-100">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

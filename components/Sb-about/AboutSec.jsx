import React from 'react';


const AboutSec = () => {
  return (
    <section className="construction-section container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-7 mb-4 mb-lg-0">
          <p className="section-subtitle text-uppercase fw-bold text-warning mb-2">
            Leading The Way In Building And Civil Construction
          </p>
          <h2 className="section-title fw-bold mb-4">
            Committed To Delivering High Quality Construction Projects <br /> And Innovate Design!
          </h2>

          <div className="d-flex mb-4">
            <div className="me-5 text-center">
              <h3 className="text-warning fw-bold mb-0">6,154</h3>
              <p className="stats-caption">Projects And Residentials <br /> Completed in 2020</p>
            </div>
            <div className="text-center">
              <h3 className="text-warning fw-bold mb-0">2,512</h3>
              <p className="stats-caption">Qualified Employees And <br /> Workers With Us</p>
            </div>
          </div>

          <p className="mb-3 text-muted">
            Yet those that embrace change are thriving, building bigger, better, faster, and stronger products than ever before. You are helping to lead the charge; we can help you build on your past and prepare future.
          </p>
          <p className="text-muted">
            The world is changing faster than ever before, Eteon constructions are threatened as technology disrupts and software.
          </p>

          <div className="row mt-4">
            <div className="col-sm-6">
              <ul className="list-unstyled construction-list">
                <li>✔ Quality Control System</li>
                <li>✔ 100% Satisfaction Guarantee</li>
                <li>✔ Highly Professional Staff</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list-unstyled construction-list">
                <li>✔ Unrivalled Workmanship</li>
                <li>✔ Accurate Testing Processes</li>
                <li>✔ Professional and Qualified</li>
              </ul>
            </div>
          </div>

          <button className="btn btn-primary mt-4 construction-btn">
            ➜ More About Us
          </button>
        </div>

        {/* Right Image Content */}
        <div className="col-lg-5 position-relative">
          <img
            src="/images/about/pic5.jpg"
            alt="Construction Workers"
            className="img-fluid w-100 rounded shadow"
          />
          <div className="join-team-box bg-warning text-white p-4 text-center">
            <div className="mb-2">
              <i className="bi bi-eyeglasses fs-1"></i>
            </div>
            <p className="mb-2 fw-bold">Join Us, Be Part <br /> Of Our Team!</p>
            <span className="d-inline-block bg-white text-warning rounded-circle p-2">
              ➜
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;

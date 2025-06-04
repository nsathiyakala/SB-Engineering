"use client";

import React from "react";

export default function HeroSection({head,option}) {
  return (
    <div
      className="section-full overlay-black-dark bg-img-fix pr-service-hero"
      style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 content-inner chosesus-content text-white">
            <h2
              className="title-box font-weight-300 m-b15 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              {head} <span className="bg-primary" />
            </h2>
            <p className="font-16 op8 wow fadeInLeft" data-wow-delay="0.4s">
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days.
            </p>
            <h3
              className="font-weight-300 m-b50 op6 wow fadeInLeft"
              data-wow-delay="0.6s"
            >
              By 700+ customers for 3200+ Web and Mobile App development
              projects.
            </h3>
            <h4
              className="font-weight-300 wow fadeInLeft"
              data-wow-delay="0.8s"
            >
              &amp; What you will get:
            </h4>
            <ul
              className="list-checked primary wow fadeInLeft"
              data-wow-delay="1s"
            >
              <li>
                <span>
                We are a top-rated eCommerce company In Bangalore
                </span>
              </li>
              <li>
                <span>
                   Experienced team of 27+ professional website developers
                </span>
              </li>
              <li>
                <span>
                 Get the perfect balance between website design features and your budget.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 m-b30 " >
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form wow box-shadow bg-white fadeInUp"
              data-wow-delay="0.2s"
              
            >
              <h3 className="title-box font-weight-300 m-t0 m-b10">
                Let's Convert Your Idea into Reality
                <span className="bg-primary" />
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user text-primary" />
                      </span>
                      <input
                        name="dzName"
                        type="text"
                        required
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-mobile text-primary" />
                      </span>
                      <input
                        name="dzOther[Phone]"
                        type="number"
                        required
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-email text-primary" />
                      </span>
                      <input
                        name="dzEmail"
                        type="email"
                        className="form-control"
                        required
                        placeholder="Your Email Id"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group flex-nowrap">
                      <span className="input-group-addon">
                        <i className="ti-check-box text-primary" />
                      </span>
                      <select className="form-select form-select-lg type-3 ml-2">
                        {option.map((option, index) => (
                          <option key={index}>{option}</option>
                        ))}
                        {/* <option>Static Site</option>
                        <option>Dynamic Site</option>
                        <option>E-commerce site</option> */}
                       
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-12 col-md-12">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="site-button button-md"
                  >
                    <span>Get A Free Quote!</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

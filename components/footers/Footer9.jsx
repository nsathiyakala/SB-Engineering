"use client";

import React from "react";
import Link from "next/link";
import { footerLinks2, socialLinks } from "@/data/footerLinks";
import Image from "next/image";
export default function Footer9() {
  return (
    <footer className="site-footer map-footer">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row equal-wraper">
            <div
              className="col-md-4 col-lg-6 col-sm-12 p-a0 equal-col wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <iframe
                className=""
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14444.846145183914!2d75.84806889203723!3d25.16233421040968!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1517832215254"
                style={{
                  border: 0,
                  width: "100%",
                  minHeight: 300,
                  height: "100%",
                  verticalAlign: "middle",
                }}
                allowFullScreen=""
              />
            </div>
            <div
              className="col-md-8 col-lg-6 col-sm-12 equal-col wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="p-tb60 p-lr15">
                <div className="max-w600">
                  <div className="footer-logo m-b30 logo-white">
                    <img
                      alt=""
                      width={120}
                      src="/images/logo-white-7.png"
                      height="75"
                    />
                  </div>
                  <div className="m-b0">
                    <h5 className="m-b10 text-white">
                      Subscribe To Our Newsletter
                    </h5>
                    <p className="text-capitalize m-b20">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry has been the industry's standard
                      dummy text ever since the..
                    </p>
                    <div className="subscribe-form form-white m-b20">
                      <form
                        className="dzSubscribe"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <div className="dzSubscribeMsg" />
                        <div className="input-group">
                          <input
                            name="dzEmail"
                            required="required"
                            className="form-control"
                            placeholder="Your Email Address"
                            type="email"
                          />
                          <span className="input-group-btn">
                            <button
                              name="submit"
                              value="Submit"
                              type="submit"
                              className="site-button btnhover17 radius-xl"
                            >
                              Subscribe
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                    <ul className="list-inline m-a0">
                      {socialLinks.map((link, index) => (
                        <React.Fragment key={index}>
                          <li>
                            <a
                              href={link.href}
                              className={`site-button circle ${link.className}`}
                            >
                              <i className={link.iconClass} />
                            </a>
                          </li>{" "}
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-bottom text-left row">
                <div className="col-md-12 col-sm-12 text-left p-lr30">
                  <span>
                    Copyright ©{" "}
                    <span className="current-year">
                      {new Date().getFullYear()}
                    </span>
                    <a href="https://dexignzone.com/" target="_blank">
                      DexignZone
                    </a>{" "}
                    . all rights reserved.
                  </span>
                  <div className="widget-link m-t10">
                    <ul>
                      {footerLinks2.slice(0, 5).map((link, index) => (
                        <li key={index}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

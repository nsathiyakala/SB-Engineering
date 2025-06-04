"use client";

import React from "react";
import Nav from "./component/Nav";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socials";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import { Mail, Phone } from "lucide-react";
export default function Header19() {
  return (
    <header className="site-header mo-left header">
      {/* main header */}
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix dz-header">
          <div className="container-fluid clearfix">
            {/* website logo */}
            <div className="logo-header mostion logo-dark">
              <Link href={`/`}>
                <img alt="" src="../images/header-logo.png" width="78" height="75" />
              </Link>
            </div>
            {/* nav toggle button */}
            <button
              className="navbar-toggler collapsed navicon justify-content-end"
              type="button"
              onClick={toggleMobileMenu}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            {/* extra nav */}
            <div className="extra-nav border-0">
              {/* <div className="extra-cell d-flex align-items-center gap-5 gap-xl-3 d-none d-lg-flex">
                <a href="#" style={{ color: "#253445" }}>
                  {" "}
                  Sign Up{" "}
                </a>
                <button
                  className="button dz-bannerbtn bg-primary"
                  type="button"
                >
                  Sign In
                </button>
              </div> */}
              <div className="extra-cell d-flex align-items-center justify-content-center gap-5 gap-xl-3 d-none d-lg-flex">
                <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4 text-yellow" />
                <span className="ps-2">
                  <a href="tel: +91 9876543210"></a>
                  +91 9876543210</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4 text-yellow" />
                <span className="ps-2">
                  <a href="mailto:info@sbengineers.com"></a>
                  info@sbengineers.com</span>
              </div>

               <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4 text-yellow" />
                <span className="ps-2">4th West Cross Road, Vellore</span>
              </div>
              </div>
              
            </div>
            {/* Quik search */}

            {/* main nav */}
            <div
              className="header-nav navbar-collapse collapse justify-content-around"
              id="navbarNavDropdown"
            >
              <div className="logo-header d-md-block d-lg-none">
                <Link href={`/`}>
                  <img alt="" src="/images/logo.png" width="258" height="75" />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <Nav />
              </ul>
              <div className="dlab-social-icon">
                <ul>
                  {socialLinks.map((elm, i) => (
                    <React.Fragment key={i}>
                      <li>
                        <a
                          className={`site-button circle-sm outline  ${elm.className}`}
                          href={elm.href}
                        />
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* main header END */}
    </header>
  );
}

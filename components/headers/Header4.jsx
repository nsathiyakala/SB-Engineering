"use client";

import React from "react";
import Nav from "./component/Nav";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socials";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
export default function Header4() {
  return (
    <header className="site-header mo-left header navstyle2">
      {/* main header */}
      <div className="sticky-header main-bar-wraper header-curve navbar-expand-lg">
        <div className="main-bar clearfix bg-primary">
          <div className="container clearfix">
            {/* website logo */}
            <div className="logo-header mostion logo-dark">
              <Link href={`/`}>
                <img alt="" src="/images/logo-2.png" width="258" height="75" />
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
            <div className="extra-nav">
              <div className="extra-cell">
                <button
                  id="quik-search-btn"
                  type="button"
                  className="site-button-link"
                >
                  <i className="la la-search" />
                </button>
              </div>
            </div>
            {/* Quik search */}

            {/* main nav */}
            <div
              className="header-nav navbar-collapse collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <div className="logo-header d-md-block d-lg-none">
                <Link href={`/`}>
                  <img
                    alt=""
                    src="/images/logo-2.png"
                    width="258"
                    height="75"
                  />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <Nav />
              </ul>
              <div className="dlab-social-icon ind-social">
                <ul>
                  {socialLinks.map((elm, i) => (
                    <React.Fragment key={i}>
                      <li>
                        <a
                          className={`site-button-link  ${elm.className}`}
                          href={elm.href}
                        />
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
                <p>{new Date().getFullYear()} Industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main header END */}
    </header>
  );
}

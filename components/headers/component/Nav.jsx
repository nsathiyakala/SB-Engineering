"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AboutUsLink,
  AcademyLink,
  AmazingLink,
  blogItems,
  CareersLink,
  Companylink,
  ContactLink,
  contactLinks,
  elementItems,
  ExpertsHubLink,
  headerAndFooters,
  homeItems,
  HomeLink,
  pagesItems,
  PortfolioLink,
  ProjectLink,
  ProjectPortfolioLink,
  ServicesLink,
  shopLinks,
  ZingfluenceLink,
} from "@/data/menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (menuMain) => {
    let isActive = false;
    if (menuMain.href && menuMain.href !== "#") {
      if (pathname.split("/")[1] == menuMain.href?.split("/")[1]) {
        isActive = true;
      }
    }
    menuMain.length &&
      menuMain.forEach((menu) => {
        if (menu.href && menu.href !== "#") {
          if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (menu.links) {
          menu.links.forEach((el) => {
            if (el.href && el.href != "#") {
              if (pathname.split("/")[1] == el.href?.split("/")[1]) {
                isActive = true;
              }
            }
            if (el.links) {
              el.links.map((elm) => {
                if (elm.href && elm.href != "#") {
                  if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                    isActive = true;
                  }
                }
              });
            }
          });
        }
      });
    return isActive;
  };

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 991);
  const [menuOpen1, setMenuOpen1] = useState("");
  const [menuOpen2, setMenuOpen2] = useState("");

  // Function to handle resizing
  const handleResize = () => {
    // Update screen width state
    setIsLargeScreen(window.innerWidth > 991);

    // Update header height state
    const headerElement = document.querySelector(".header");
    if (headerElement) {
      const newHeight = headerElement.offsetHeight;
      setHeaderHeight(newHeight);
    }
  };

  useEffect(() => {
    // Call handleResize on component mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  // Calculate the height for the mega-menu if large screen
  const megaMenuHeight = isLargeScreen
    ? `calc(100vh - ${headerHeight}px)`
    : "auto";

  return (
    <>
     

      <li className={isMenuActive(HomeLink) ? "active" : ""}>
        <Link
          href={HomeLink.href}
          className={isMenuActive(HomeLink) ? "menuActive" : ""}
        >
          {HomeLink.label}
        </Link>
      </li>

     
      <li
        className={` ${isMenuActive(Companylink) ? "active" : ""} ${
          menuOpen1 == "company" ? "open" : ""
        }  `}
      >
        <a
          onClick={() =>
            setMenuOpen1((pre) => (pre == "company" ? "" : "company"))
          }
        >
          Company
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="sub-menu right">
          {Companylink.map((link, index) => (
            <li key={index}>
              <Link
                className={isMenuActive(link) ? "menuActive" : ""}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li
        className={` ${isMenuActive(ServicesLink) ? "active" : ""} ${
          menuOpen1 == "services" ? "open" : ""
        }  `}
      >
        <a
          onClick={() =>
            setMenuOpen1((pre) => (pre == "service" ? "" : "services"))
          }
        >
          Services
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="sub-menu right">
          {ServicesLink.map((link, index) => (
            <li key={index}>
              <Link
                className={isMenuActive(link) ? "menuActive" : ""}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

       {/* <li
        className={` ${isMenuActive(ProjectPortfolioLink) ? "active" : ""} ${
          menuOpen1 == "projectportfolio" ? "open" : ""
        }  `}
      >
        <a
          onClick={() =>
            setMenuOpen1((pre) => (pre == "projectportfolio" ? "" : "projectportfolio"))
          }
        >
          Project Portfolio
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="sub-menu right">
          {ProjectPortfolioLink.map((link, index) => (
            <li key={index}>
              <Link
                className={isMenuActive(link) ? "menuActive" : ""}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}

             <li className={isMenuActive(ProjectLink) ? "active" : ""}>
        <Link
          href={ProjectLink.href}
          className={isMenuActive(ProjectLink) ? "menuActive" : ""}
        >
          {ProjectLink.label}
        </Link>
      </li>

       <li className={isMenuActive(ContactLink) ? "active" : ""}>
        <Link
          href={ContactLink.href}
          className={isMenuActive(ContactLink) ? "menuActive" : ""}
        >
          {ContactLink.label}
        </Link>
      </li>

       

     

      {/* <li>
        <Link
          href={`/contact-2`}
          className={`has-mega-menu ${menuOpen1 == "pages" ? "open" : ""}  `}
        >
          Contact
        </Link>
      </li> */}
    </>
  );
}

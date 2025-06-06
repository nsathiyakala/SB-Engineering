import ContactSection from "@/components/contact/ContactSection";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import { LucidePhone, MailIcon, Phone, PhoneCall, PhoneIcon, Timer } from "lucide-react";

import React from "react";

export const metadata = {
  title: "Home 20 || Industry - Factory & Industrial React Nextjs Template",
  description: ""
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">

            <ContactSection/>
            <div className="container" style={{marginBottom:"-130px"}}>
               <div className="c-foot offset-lg-4 col-sm-12 col-md-12 col-lg-7 d-flex flex-wrap justify-content-between">
              <div className="footer-contact__item d-flex align-items-center">
                <div className="footer-contact__icon">
                  <LucidePhone style={{width:"18px"}}/>
                </div>
                <div className="footer-contact__text">
                  <span>Call Us:</span>
                  <strong><a href="tel:00123968574">(002) 123968574</a></strong>
                </div>
              </div>
              <div className="footer-contact__item d-flex align-items-center">
                <div className="footer-contact__icon">
                 
                 <MailIcon style={{width:"18px"}}/>
                </div>
                <div className="footer-contact__text">
                  <span>Email Us:</span>
                  <strong><a href="mailto:Eteon@7oroof.com">Eteon@7oroof.com</a></strong>
                </div>
              </div>
              <div className="footer-contact__item d-flex align-items-center">
                <div className="footer-contact__icon">
                 <Timer style={{width:"18px"}}/>
                </div>
                <div className="footer-contact__text">
                  <span>Opening Hours:</span>
                  <strong>Mon-Fri: 8am – 7pm</strong>
                </div>
              </div>
            </div>
            </div>
            

           

            
         

        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}

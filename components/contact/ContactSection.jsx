import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <>
      <div className="container contact-card py-5 ">

       <div className="row justify-content-center mb-5">
         <div className="col-11">
           <div className="row dzseth">
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 p-lr20 p-tb30 center seth radius-sm">
                <div className="icon-lg text-yellow m-b20">
                  <a href="#" className="icon-cell">
                    <i className="ti-location-pin" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte text-uppercase">Address</h5>
                  <p>123 West Street, Melbourne Victoria 3000 Australia</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 p-lr20 p-tb30 center seth radius-sm">
                <div className="icon-lg text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="ti-email" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte text-uppercase">Email</h5>
                  <p>
                    <a href="mailto:someone@example.com">info@example.com</a>
                    <br />
                    <a href="mailto:someone@example.com">info@example.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 p-lr20 p-tb30 center seth radius-sm">
                <div className="icon-lg text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="ti-mobile" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte text-uppercase">Phone</h5>
                  <p>
                    <a href="tel:+4733378901">
                      +00 1234 5678 90 <br />
                      +00 234 678 9012
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 p-lr20 p-tb30 center seth radius-sm">
                <div className="icon-lg text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="ti-printer" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte text-uppercase">Fax</h5>
                  <p>
                    <a href="tel:+4733378901">
                      +00 1234 5678 90 <br />
                      +00 234 678 9012
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>

       
        
      <div className="row no-gutters  rounded overflow-hidden justify-content-center">
        <div className="col-11 shadow-lg bg-white p-sm-4 p-md-4 p-xl-5  p-3rounded">
          
          <div className="container-fluid">
            <div className="row  row-gap-3">
              {/* Left Side - Image with Overlay Text */}
        <div className="col-md-5 p-0 bg-white">
          <div className="contact-left "></div>
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
        <div className="col-md-7 bg-white ps-2 ps-0  ps-sm-3 ps-md-4 ps-lg-5">
          <h5 className="main-sub-ti ">Inquiry Form</h5>
          <p className=" mb-4">
            Please fill out the form below and our team will get back to you shortly.
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
              <textarea className="form-control pt-2" rows="3" placeholder="Additional Details!" />
            </div>
            <Link
                href={`/portfolio-grid-2`}
                className="btn btn__secondary_in  text-decoration-none w-100 mt-4"
                // style={{width:"100%"}}
              >
                 <span className="icon-div-pri">
                                    <ArrowRight className="icon-sm-new "/>
                                </span>
               Submit Request
              </Link>
            
          </form>
        </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>

    <div className="map-section container-fluid p-0 ">
      <div className="map-responsive">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.46689813165!2d106.70042391480193!3d10.762622792327692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e0f0b317b%3A0x50f9c38a8e4a1a1a!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1618304014566!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div></>
  
  );
};

export default ContactSection;

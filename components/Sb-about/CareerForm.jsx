import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

const CareerForm = () => {
  return (
    <>
      <div className="container contact-card pb-5 ">

       
        
      <div className="row no-gutters  rounded overflow-hidden justify-content-center">
        
        
        <div className="col-11 shadow-lg bg-white p-5 rounded">
            
          
          <div className="container-fluid">
            <div className="row">
                
              {/* Left Side - Image with Overlay Text */}
        <div className="col-md-5 p-0 bg-white">
          <div className="contact-left"></div>
        
        </div>

        {/* Right Side - Form */}
        <div className="col-md-7 bg-white ps-5">
          <h5 className="main-sub-ti ">Carrer Form</h5>
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

   </>
  
  );
};

export default CareerForm;

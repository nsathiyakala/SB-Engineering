import React from 'react';
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

const HomeBuildSec = () => {
  return (
    <section className="build-section container-fluid">
      <div className="row">
        {/* Left Side */}
        <div className="col-12 col-sm-6 col-lg-6 col-md-12 build-text-area py-5 build-content-sec">
          <h2 className="main-ti ">
            We Help You Build On Your Past And <br /> Prepare For The Future.
          </h2>
          <p className=" mb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>

          <div className="build-wrp">
            <div className="build-box-d">
              <div className="build-box px-2 py-4 shadow-sm">
                <img src="/images/home/we-help/icon1.png" alt="Integrity" className="mb-2" />
                <h5 className="mb-0 fw-semibold">Where Integrity <br /> Meets Excellence</h5>
              </div>
            </div>
            <div className="build-box-d">
              <div className="build-box  px-2 py-4 shadow-sm">
                <img src="/images/home/we-help/icon3.png" alt="Collaboration" className="mb-2" />
                <h5 className="mb-0 fw-semibold">Quality Control <br /> System</h5>
              </div>
            </div>
            <div className="build-box-d">
              <div className="build-box  px-2 py-4 shadow-sm">
                <img src="/images/home/we-help/icon2.png" alt="Quality Control" className="mb-2" />
               
                <h5 className="mb-0 fw-semibold">Collaborating For <br /> Success</h5>
              </div>
            </div>
          </div>

          <p className="build-subdesc mb-5 mt-4">
            Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>

         
                           <Link
                href={`/about-us`}
                className="btn__secondary_pri text-decoration-none"
                
              >
                 <span className="icon-div-pri">
                                    <ArrowRight className="icon-sm-new " style={{color:"#000"}}/>
                                </span>
                Know More
              </Link>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 col-md-12 build-image-area p-0">
            <div style={{height:"100%", }}>
                <img src="/images/home/we-help/img.jpg" alt="Future Planning" className=" w-100 h-100 object-fit-cover" />
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default HomeBuildSec;

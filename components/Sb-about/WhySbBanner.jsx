import React from "react";


const WhySbBanner = () => {
  return (
    <div className="projectBanner-wrapper">
      <div className="projectBanner-parallax">
        <div className="container h-100 d-flex flex-column justify-content-center align-items-start">
          <h1 className="projectBanner-title">Why SB Engineers</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb projectBanner-breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className="text-white">Home</a>
              </li>
              <li className="breadcrumb-item  text-white" aria-current="page">
               <a href="/about-us" className="text-white">About Us</a> 
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
               <a href="/why-sb-engineers" className="text-white">Why SB Engineers</a> 
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default WhySbBanner;

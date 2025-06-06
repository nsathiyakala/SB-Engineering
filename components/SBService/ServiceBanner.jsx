import React from "react";


const ServiceBanner = ({banner}) => {
  return (
    <div className="projectBanner-wrapper">
      <div className="projectBanner-parallax">
        <div className="container h-100 d-flex flex-column justify-content-center align-items-start">
          <h1 className="projectBanner-title">{banner?.title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb projectBanner-breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className="text-white">Home</a>
              </li>
              <li className="breadcrumb-item  text-white" aria-current="page">
               <a href={`/${banner?.link}`} className="text-white">{banner?.title}</a> 
              </li>
             
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;

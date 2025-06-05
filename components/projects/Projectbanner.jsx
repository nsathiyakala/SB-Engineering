import React from "react";


const ProjectBanner = () => {
  return (
    <div className="projectBanner-wrapper">
      <div className="projectBanner-parallax">
        <div className="container h-100 d-flex flex-column justify-content-center align-items-start">
          <h1 className="projectBanner-title">Our Projects</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb projectBanner-breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className="text-white">Home</a>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                Project
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;

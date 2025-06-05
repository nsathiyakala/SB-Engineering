"use client";

import { Autoplay, Pagination,Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react"
const slides = [
  {
    imageSrc: "/images/home-banner/banner.png",
    title: " Your Vision, <br/>  Our Expertise",
    description:
      "Find the comfiest and most suitable suits for your outdoor activities from head to toe",
  },
  {
    imageSrc: "/images/home-banner/banner.png",
    title: " Your Vision, <br/>  Our Expertise",
    description:
      "Find the comfiest and most suitable suits for your outdoor activities from head to toe",
  },
  
];

export default function Hero() {
  return (
    <div className="dz-industry2-zone position-relative">
      <Swiper
       modules={[Pagination, Autoplay, Navigation]}
        navigation={{
          prevEl: ".snbp34",
          nextEl: ".snbn34",
        }}
        // autoplay={{
        //   delay: 4000,
        // }}
        speed={2500}
        loop
        pagination={{
          clickable: true,
          el: ".sph2",
        }}
        className="swiper mySwiper relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="silder-img overlay-black-middle">
              <Image
                src={slide.imageSrc}
                width={1920}
                height={720}
                data-swiper-parallax="30%"
                alt={slide.title}
              />
            </div>
            <div className="silder-content">
              <h1 className="home-banner-ti fw-semibold mb-4" dangerouslySetInnerHTML={{__html:slide.title}}></h1>
              {/* <p className="mb-4">{slide.description}</p> */}

               <div className="mb-4">
                            <div className="flex items-center space-x-3 mb-1 home-banner-li">
                              <CheckCircle className="w-5 h-5 text-yellow" />
                              <span className="text-white ps-3 ">Quality Control Systems, Construction Supervision</span>
                            </div>
                            <div className="flex items-center space-x-3 mb-1 home-banner-li">
                              <CheckCircle className="w-5 h-5 text-yellow" />
                              <span className="text-white ps-3">Highly Professional Staff, Accurate Pricing</span>
                            </div>
                            <div className="flex items-center space-x-3 mb-1 home-banner-li">
                              <CheckCircle className="w-5 h-5 text-yellow" />
                              <span className="text-white ps-3">Completion of Project in Given Time</span>
                            </div>
                          </div>
              <div className="dz-btns d-flex align-items-center">
                <Link
                  href="/services-1"
                  className="btn__secondary  text-decoration-none "
                >
                  <span className="icon-div-pri">
                                    <ArrowRight className="icon-sm-new "/>
                                </span>
                  Know More
                </Link>
               
              </div>
            </div>
          </SwiperSlide>
        ))}

         <div className="owl-nav" style={{
            position: "absolute",
            width:"100%",
            height:"100%",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            zIndex: "1",
            left: "calc(50% - 56px)",
            top:"0",
            left:"0",
            
          }}>
          <button
            type="button"
            role="presentation"
            className="owl-prev snbp34"
            style={{ zIndex: 1 ,
                background:"#fff",
                padding:"10px 14px",
                borderRadius:"50%",
                marginLeft:"20px",
                boxShadow:"1px 1px 4px #fff"
              }}
          >
            <i className="ti-arrow-left text-primary" style={{fontWeight:"700"}}  />
          </button>
          <button
            type="button"
            role="presentation"
            className="owl-next snbn34"
            style={{ zIndex: 1 ,
                background:"#fff",
                padding:"10px 14px",
                borderRadius:"50%",
                marginRight:"20px",
                boxShadow:"1px 1px 4px #fff"
            }}
          >
            <i className="ti-arrow-right text-primary" style={{fontWeight:"700"}} />
          </button>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "8px",
            zIndex: "1",
            left: "calc(50% - 56px)",
          }}
          className="swiper-pagination style-1 swiper-pagination-bullets swiper-pagination-horizontal sph2"
        ></div>
      </Swiper>
    </div>
  );
}

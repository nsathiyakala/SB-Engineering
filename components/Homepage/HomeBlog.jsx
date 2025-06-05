 "use client"
 
 import React from "react";
 import Image from "next/image";
 import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";



 export default function HomeBlog() {
    const serviceContent = [
        {
            title:"Architectural Design",
        img:"/images/home/services/1.png",
        cap:"Innovative and sustainable architectural solutions that blend functionality with aesthetic appeal. Our designs reflect modern trends while respecting traditional values."
        },
         {
            title:"Structural Engineering",
        img:"/images/home/services/2.png",
        cap:"Precision structural engineering solutions that ensure safety, durability, and cost-effectiveness. We provide comprehensive structural design services."
        },
         {
            title:"Steel & Rebar Detailing",
        img:"/images/home/services/3.png",
        cap:"Detailed steel and rebar detailing services that ensure precise construction execution. Our detailed drawings facilitate smooth construction processes."
        }
  
  
]
   return (
   
   <div className="section-full bg-white content-inner home-blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                <div className="text-center">
                    <p className="upper-cap">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <h2 className="main-ti">Our Service Beyond Expectation</h2>
                </div>
               
                {/* Event post Carousel with no margin */}
                <div className="section-content box-sort-in m-b30 button-example mt-5">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop
                    autoplay={{
                      delay: 4000,
                    }}
                    speed={2500}
                    modules={[Autoplay]}
                    className="blog-carousel mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {serviceContent.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <div className="item">
                          <div className="dlab-box   h-100">
                             <div className="dlab-info p-a20 bg-white h-100">
                             
                              <h4 className="main-sub-ti m-t0">
                                <a href="#">{elm?.title}</a>
                              </h4>
                              <p className="mb-4 sub-des">
                               {elm?.cap}
                               </p>

                               <a href="" className="link a-new " >
                                <span className="icon-div">
                                    <ArrowRight className="icon-sm-new "/>
                                </span>
                                
                                Read More</a>
                            </div>

                            <div className="dlab-media h-100">
                              <a href="#">
                                <Image
                                  alt=""
                                  src={elm?.img}
                                  width="700"
                                  height="500"
                                />
                              </a>
                            </div>
                           
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="text-center pt-4">
                   <Link
                href={`/portfolio-grid-2`}
                className="btn__secondary_in  text-decoration-none"
                // style={{zIndex:"1000"}}
              >
                 <span className="icon-div-pri">
                                    <ArrowRight className="icon-sm-new "/>
                                </span>
                View More 
              </Link>
                </div>

                
              </div>
            </div>
          </div>
          {/* Event post Carousel with no margin END */}
        </div>

         );
}

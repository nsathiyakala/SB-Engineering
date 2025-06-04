"use client";

import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  description,
  src,
  link,
  price,
  color,
  i,
  activeCard,
  cardRef,
  animation_delay,
  data
}) => {
  const isActive = activeCard === `${i + 1}`;
  const backgroundColor = i % 2 === 0 
  return (
    <div
      className={`cardContainer`} // Add scrolled-up class for activeCard
      ref={cardRef}
      data-id={i + 1} // Set the ID to match the index for comparison
    >
      <div
        className=" dlab-box no-hover wow fadeInUp "
        // data-wow-delay={animation_delay}
        style={{
          // backgroundColor: color,
          width: `calc(90% + ${i * 5}%)`, // Combine both the active and calculated widths          // isActive && activeCard === `${i + 1}` // Active card width 100%
          //   ? "100%"
          //   : activeCard === `${i}` // Previous card (one step before active) width 95%
          //   ? "95%"
          //   : activeCard === `${i - 1}` // Previous card (two steps before active) width 90%
          //   ? "90%"
          //   : "95%", // Default width for inactive cards
          // transition: "width 0.3s ease", // Smooth transition for width change
          // transition: "transform 0.3s ease, width 0.3s ease", // Add transition for both scale and width
          // top: `calc(-5vh + ${i * 25}px)`, // Adjust the top position based on the index
        }}
      >


        <div className="row">
          <div className="col-lg-12" >
            
             {/* <div className={`sort-title clearfix text-center ${isActive ? "display-title" : ""}`}>
              <h4>{data?.service_name}</h4>
            </div> */}
            {/* Pricing table-1 Columns 3 with gap */}
            <div className="section-content box-sort-in button-example m-t80">
              <div className="pricingtable-row">
                <div className="row max-w1000 m-auto">
                  <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                    <div className="pricingtable-wrapper style2 bg-white">
                      <div className="pricingtable-inner">
                        <div className="pricingtable-price">
                          <h4 className="font-weight-800 m-t10 m-b0">
                            {data?.service[0]?.title}
                          </h4>
                          <div className="pricingtable-bx">
                          Starting @ <span>₹ {data?.service[0]?.price}</span>
                          </div>
                        </div>
                        <ul className="pricingtable-features">
                        {data?.service[0]?.list.map((item)=>{
                          return(
                            <li>
                                 {item}
                                
                              </li>
                          )
                        })}
                              
                            </ul>
                        {/* <p>
                        {data?.service[0]?.list.map((item)=>{
                          return(
                            <li>{item}</li>
                          )
                        })}
                        </p> */}
                        <div className="m-t20">
                         <a href={data?.service[0]?.link} className="site-button white radius-xl">
                            <span className="p-lr30">View Service</span>
                          </a>
                          <a href={data?.service[0]?.link} className="site-button radius-xl">
                            <span className="p-lr30">Buy Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
  <div
    className={`pricingtable-wrapper style2 ${
      backgroundColor ? "bg-primary" : "bg-grey"
    } text-white active`}
  >
    <div className="pricingtable-inner">
      {backgroundColor ? (
        <>
         
          <div className="pricingtable-price">
            <h4 className="font-weight-800 m-t10 m-b0">
              {data?.service[1]?.title}
            </h4>
            <div className="pricingtable-bx">
              Starting @ <span>₹ {data?.service[1]?.price}</span>
            </div>
          </div>

         
          <ul className="pricingtable-features">
            {data?.service[1]?.list?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

       
          <div className="m-t20">
            <a href={data?.service[1]?.link} className="site-button white radius-xl">
              <span className="p-lr30">View Service</span>
            </a>
            <a href={data?.service[1]?.link} className="site-button white-1 radius-xl">
              <span className="p-lr30">Buy Now</span>
            </a>
          </div>
        </>
      ): 
      <>
      <div className="dm"  style={{height:"300px", display:"flex",
        alignItems:"center",
        justifyContent:"center",
      }}>
      <h4 className="font-weight-800 m-t10 m-b0" style={{fontSize:"30px"}} dangerouslySetInnerHTML={{__html:data?.service[1]?.title}}>
            </h4>
      </div>
      

      </>}
    </div>
  </div>
</div>

                  <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                    <div className="pricingtable-wrapper style2 bg-white">
                      <div className="pricingtable-inner">
                        <div className="pricingtable-price">
                          <h4 className="font-weight-800 m-t10 m-b0">
                          {data?.service[2]?.title}
                          </h4>
                          <div className="pricingtable-bx">
                          Starting @ <span>₹ {data?.service[2]?.price}</span> 
                          </div>
                        </div>
                        <ul className="pricingtable-features">
                        {data?.service[2]?.list.map((item)=>{
                          return(
                            <li>
                                 {item}
                                
                              </li>
                          )
                        })}
                              
                            </ul>
                        <div className="m-t20">
                          <a href={data?.service[2]?.link} className="site-button white radius-xl">
                            <span className="p-lr30">View Service</span>
                          </a>
                          <a href={data?.service[2]?.link} className="site-button radius-xl">
                            <span className="p-lr30">Buy Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;


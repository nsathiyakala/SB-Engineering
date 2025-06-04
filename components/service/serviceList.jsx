import React from 'react'

const ServiceList = ({data,head}) => {
    console.log(data);
    
  return (
    <div className="section-full bg-white content-inner pr-service-list">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sort-title clearfix text-center">
                  <h4>{head}</h4>
                </div>
                {/* Pricing table-1 Columns 3 with gap */}
                <div className="section-content box-sort-in button-example p-tb50">
                  <div className="pricingtable-row">
                    <div className="row">
                        {data?.map((data,index)=>(
                             <div className="col-sm-12 col-md-4 col-lg-4">
                             <div className="pricingtable-wrapper">
                               <div className={`pricingtable-inner `}>
                                 <div className="pricingtable-price" style={{padding:"10px"}}>
                                 <span className="pricingtable-type">Starting @ </span>
                                   <span className="pricingtable-bx">₹{data.price}</span>
                                   
                                 </div>
                                 <div className="pricingtable-title bg-primary"  style={{padding:"0px"}}>
                                   <h2 style={{fontSize:"20px"}}>{data.title}</h2>
                                 </div>
                                 <ul className="pricingtable-features">
                                     {data?.list?.map((item)=>(
                                          <li style={{fontSize:"16px"}}>
                                          <i className="fas fa-check" style={{fontSize:"12px"}}/> {item}
                                        </li>
                                     ))}
                                 </ul>
                                 <div className="pricingtable-footer">
                                   <a href="/contact" className="site-button">
                                     Buy Now
                                   </a>
                                 </div>
                               </div>
                             </div>
                           </div>
                        ))}
                     
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing table-1 Columns 3 with gap END */}
        </div>
  )
}

export default ServiceList
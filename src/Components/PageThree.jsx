import React from "react";
import pic1 from "../img/spidermoon.jpg";
import pic2 from "../img/flower.jpg";
import pic3 from "../img/art.jpg";
import pic from "../img/pfpf.jpg";


export default function PageThree() {
  return (
    <div id='team'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <h1 style={{ color: "#833471" }}>03</h1>
            <h3>TALENTED TEAM</h3>
        <hr style={{ width: 200 }} className="mx-auto"/>  
          </div>
        </div>
        <div className="row p-3 mt-5">
          <div className="col-md-3 mb-3">
            <img src={pic1} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-md-3 mb-3">
            <img src={pic2} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-md-3 mb-3">
            <img src={pic3} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-md-3 mb-3 " style={{ height: "10%" }}>
            <img src={pic} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

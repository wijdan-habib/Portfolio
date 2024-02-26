import React from "react";

export default function PageTwo() {
  return (
    <div style={{ backgroundColor: "#192734" }} id='about'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex flex-column text-center mt-5">
            <h1 style={{ color: "#833471" }}>02</h1>
            <h4 style={{ color: "#CEE5D5" }}>OUR AGENCY</h4>
          </div>
          <hr style={{ width: 200, color: "#CEE5D5" }} className="mx-auto" />
        </div>
        <div className="row mt-5 p-5" style={{ color: "#CEE5D5" }}>
          <div className="col-md-6">
            <img src="" alt="" />
          </div>
          <div className="col-md-6 d-flex flex-column">
            <h2>DIGITAL TEAM</h2>
            <h4>Best Design Agency For California</h4>
            <p className='pb-3 mb-5 gb-5'>DESIGN ROW SOCIAL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

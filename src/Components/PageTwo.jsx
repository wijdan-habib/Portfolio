import React, { useState, useEffect } from "react";
import img1 from "../img/interior.jpg";
import pic5 from "../img/social-media.jpg";
import pic6 from "../img/Mobile2.jpg";

export default function PageTwo() {
  const [item, setItem] = useState([]);

  const data = [
    {
      id: 1,
      pic: img1,
      content: `------DESIGN-----Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur quos voluptatibus voluptate dolores eum animi repellat, nulla ipsum`,
      caregory: "Design"
    },
    {
      id: 2,
      pic: pic6,
      content: `-----MOBILE------Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur quos voluptatibus voluptate dolores eum animi repellat, nulla ipsum`,
      caregory: "Mobile"
    },
    {
      id: 3,
      pic: pic5,
      content: `----SOCIAL----Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur quos voluptatibus voluptate dolores eum animi repellat, nulla ipsum`,
      caregory: "Social"
    }
  ];

  useEffect(() => {
    // Set default filter to "Design" when component mounts
    filterItem("Design");
  }, []); // Empty dependency array so it runs only once on mount

  const filterItem = Cat => {
    const updatedItem = data.filter(elem => {
      return elem.caregory === Cat;
    });
    setItem(updatedItem);
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#192734" }}
      id="about"
    >
      <div className="row">
        <div className="col-md-12 d-flex flex-column text-center mt-5">
          <h1 style={{ color: "#833471" }}>02</h1>
          <h4 style={{ color: "#CEE5D5" }}>OUR AGENCY</h4>
        </div>
        <hr style={{ width: 200, color: "#CEE5D5" }} className="mx-auto m-2" />
      </div>
      <div className="row " style={{ color: "#CEE5D5" }}>
        <div className="col-md-6 d-flex justify-content-center p-5 mb-4">
          {item.map((e, index) => (
            <img
              key={index}
              className="rounded-4 m-2"
              src={e.pic}
              alt=""
              style={{ width: "50%" }}
            />
          ))}
        </div>
        <div className="col-md-6 d-flex flex-column mt-5 p-3">
          <h2>DIGITAL TEAM</h2>
          <h4>Best Design Agency For California</h4>
          <div className="d-flex justify-content-start">
            <p className="m-3 btn cursor-pointer" style={{color:"#CEE5D5"}} onClick={() => filterItem("Design")}>
              DESIGN
            </p>
            <p className="m-3 btn cursor-pointer" style={{color:"#CEE5D5"}} onClick={() => filterItem("Mobile")}>
              Mobile
            </p>
            <p className="m-3 btn cursor-pointer" style={{color:"#CEE5D5"}} onClick={() => filterItem("Social")}>
              Social
            </p>
          </div>
          <hr style={{ width: 400, color: "#CEE5D5" }} />
          {item.map((e, index) => (
            <p key={index} className="m-3">
              {e.content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

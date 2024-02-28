import React, { useState, useEffect } from "react";
import p1 from "../img/spidermoon.jpg";
import p2 from "../img/flower.jpg";
import p3 from "../img/art.jpg";
import p4 from "../img/pfpf.jpg";

export default function PageFour() {
  const data = [
    {
      id: 1,
      img: p1,
      cat: "html"
    },
    {
      id: 2,
      img: p2,
      cat: "html"
    },
    {
      id: 3,
      img: p3,
      cat: "wordpress"
    },
    {
      id: 4,
      img: p4,
      cat: "photoshop"
    },
    {
      id: 5,
      img: "",
      cat: "social"
    },
    {
      id: 6,
      img: "",
      cat: "mobile"
    }
  ];
  const [item, setItem] = useState(data);
  
  const filterItem = Cat => {
    const updatedItem = data.filter(elem => {
      return elem.cat === Cat;
    });
    setItem(updatedItem);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <h1 className="mt-5" style={{ color: "#833471" }}>
              04
            </h1>
            <h3>OUR PORTFOLIO</h3>
            <hr style={{ width: 200 }} className="mx-auto" />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-sm d-flex justify-content-between">
            <p onClick={() => filterItem('all')}>ALL</p>
            <p onClick={() => filterItem("html")}>HTML</p>
            <p onClick={() => filterItem("photoshop")}>PHOTOSHOP</p>
            <p onClick={() => filterItem("wordpress")}>WORDPRESS</p>
            <p onClick={() => filterItem("mobile")}>MOBILE</p>
          </div>
        </div>
        <div className="row">
          {item.map((e, index) => (
            <div className="col-md-4 mb-5 mt-4">
              <img
                key={index}
                src={e.img}
                alt=""
                style={{ height: "100%", width: "250px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

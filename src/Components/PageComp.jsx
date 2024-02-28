import React from "react";
import img from "../img/mobile-button.png";
import logo2 from '../img/mobile-device.png';
import logo3 from '../img/cloud.png';
import logo4 from '../img/laptop.png'
export default function PageComp() {
  const data = [
    {
      id: 1,
      logo: logo3,
      head: "WEB MARKETING",
      content:`Lorem ipsum dolor sit amet consectetur, adipisicing elit
      Veritatis nisi, tenetur, pariatur quos inventore dolore`
    },
    {
      id: 1,
      logo: logo2,
      head: "UI/UX DESIGN",
      content:`Lorem ipsum dolor sit amet consectetur, adipisicing elit
      Veritatis nisi, tenetur, pariatur quos inventore dolore`
    },
    {
        id: 2,
        logo: logo4,
        head: "ECOMMERCE",
        content:`Lorem ipsum dolor sit amet consectetur, adipisicing elit
        Veritatis nisi, tenetur, pariatur quos inventore dolore`
      }
    ]
    const card=[
      {
        id: 3,
        logo: img,
        head: "WEB MARKETING",
        content:`Lorem ipsum dolor sit amet consectetur, adipisicing elit
        Veritatis nisi, tenetur, pariatur quos inventore dolore`
      },
      {
        id: 1,
        logo: img,
        head: "WEB MARKETING",
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit
        Veritatis nisi, tenetur, pariatur quos inventore dolore`
      },
      {
        id: 1,
        logo: img,
        head: "WEB MARKETING",
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit
              Veritatis nisi, tenetur, pariatur quos inventore dolore`
      }
  ];
  return (
    <div id="work">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 d-flex flex-column justify-content-center text-center">
            <h1 style={{color: "#833471"}}>01</h1>
            <h4>What We Do</h4>
            <hr style={{ width: 200 }} className="mx-auto" />
          </div>
        </div>
        <div classname="container d-flex flex-column">
            <div className="row flex-wrap">
        {
            data.map((e)=>(
            <div className="col-md-4 col-sm">
            <div class="card border-0 ">
              <img class="card-img-top img-fluid d-block mx-auto mt-3" style={{ width: '50px' }} src={e.logo} alt="Card cap" />                
               <div class="card-body">
                  <h5 class="card-title text-center">
                    {e.head}
                  </h5>
                  <hr style={{width:200}} className='mx-auto'/>
                  <p class="card-text text-center ">
                    {e.content}
                  </p>
                </div>
              </div>
            </div>
            ))
        }
        </div> 
        </div>
        <div classname="container d-flex">
            <div className="row flex-wrap">
        {
            card.map((e)=>(
            <div className="col-md-4 col-sm">
            <div class="card border-0 ">
              <img class="card-img-top img-fluid d-block mx-auto mt-3" style={{ width: '50px' }} src={e.logo} alt="Card cap" />                
               <div class="card-body">
                  <h5 class="card-title text-center">
                    {e.head}
                  </h5>
                  <hr style={{width:200}} className='mx-auto'/>
                  <p class="card-text text-center">
                    {e.content}
                  </p>
                </div>
              </div>
            </div>
            ))
        }
        </div> 
        </div>
      </div>
    </div>
  );
}

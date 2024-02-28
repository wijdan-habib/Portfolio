import React from "react";
import "./CSS/home.css";
export default function HomePage() {
  
  return (
    <div className="bgimg" id='home'>
      <div className="content" >
        <nav class="navbar navbar-expand-lg col-sm" style={{position:"fixed"}}>
          <div class="container-fluid">
            <h1 className="p-3 g-5 logo"><a className='text-decoration-none' style={{color: "#833471"}} href="#home">PORTFOLIO</a></h1>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav offset-4 ">
                <li class="nav-item m-lg-3"><a href="#home">home</a></li>
                <li class="nav-item m-lg-3"><a href="#work">Work</a></li>
                <li class="nav-item m-lg-3"><a href="#about">About</a></li>
                <li class="nav-item m-lg-3"><a href="#team">Team</a></li>
                <li class="nav-item m-lg-3">Portfolio</li>
                <li class="nav-item m-lg-3">Pricing</li>
                <li class="nav-item m-lg-3">contact</li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-md-12 col-sm d-flex justify-content-center  mt-5 pt-5 cont">
              <h6 className="m-5">Web Designing / Web Development / Social Media</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 logo d-flex justify-content-center">
              <h1>DIGITAL TEAM</h1>
            </div>
            <div className="row">
              <div className="col-md-12  cont d-flex justify-content-center">
              <hr style={{width:300}}/>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                <button className='btn1' href="#work">WHAT WE DO</button>
                <button className='btn2'>TALK TO US</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

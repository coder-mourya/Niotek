import React from "react";
import banner from "../assets/Img/banner.png";
import Product from "../components/Product";
import Arrivals from "../components/Arrivals";
import Reviews from "../components/Reviews";
import "../assets/style/navbar.css"; 
import { useState, useEffect } from "react";

const Home = ({isNavbarExpanded}) => {
    const [marginTop, setMarginTop] = useState("90px");

       // Dynamically adjust margin based on the navbar's expanded state
       useEffect(() => {
        if (isNavbarExpanded) {
            setMarginTop("350px"); // Adjust this value based on the expanded navbar
        } else {
            setMarginTop("90px"); // Default margin when navbar is collapsed
        }
    }, [isNavbarExpanded]);



    return (
        <div className="home"  style={{ marginTop, transition: "margin-top 0.3s ease-in-out" }}>
          {/* Carousel Section */}
          <div
              id="carouselExampleIndicators"
              className="carousel slide "
              data-bs-ride="carousel"
              data-bs-interval="2000"

              style={{marginTop: "90px"}}
          >
              {/* Carousel inner with images */}
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img src={banner} className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                      <img src={banner} className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                      <img src={banner} className="d-block w-100" alt="Slide 3" />
                  </div>
              </div>

              {/* Previous and Next controls */}
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </a>
          </div>

          {/* Other Sections */}
          <section className="product-section mt-0">
              <Product />
          </section>

          <section className="arrivals-section">
              <Arrivals />
          </section>

          <section className="reviews-section">
              <Reviews />
          </section>
      
        </div>
    );
};

export default Home;

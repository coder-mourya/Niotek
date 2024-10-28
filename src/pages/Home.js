import React from "react";
// import banner from "../assets/Img/banner.png";
import Product from "../components/Product";
import Arrivals from "../components/Arrivals";
// import Reviews from "../components/Reviews";
import "../assets/style/navbar.css";
// import { useState, useEffect } from "react";
import itemPic from "../assets/Img/NIO 1.png"
import bannerBack from "../assets/Img/banner-back.png"
import pen from "../assets/Img/pen.png";
import cable from "../assets/Img/cable.png";
import "../assets/style/style.css"
// import {bubbleCursor} from 'cursor-effects';

const Home = () => {
    // const [marginTop, setMarginTop] = useState("90px");
    // const [isAnimating, setIsAnimating] = useState(false);

    // Dynamically adjust margin based on the navbar's expanded state
    // useEffect(() => {
    //     if (isNavbarExpanded) {
    //         setMarginTop("350px"); // Adjust this value based on the expanded navbar
    //     } else {
    //         setMarginTop("90px"); // Default margin when navbar is collapsed
    //     }
    // }, [isNavbarExpanded]);


    //  useEffect(() => {
    //     setIsAnimating(true);
    //     const timer = setTimeout(() => setIsAnimating(false), 1000); 
    //     return () => clearTimeout(timer);
    // }, [isAnimating]);


  
  


    return (
        <div className="home" style={{  transition: "margin-top 0.3s ease-in-out" }}>
            {/* Carousel Section */}
            <div
                id="carouselExampleIndicators"
                className="carousel slide "
                data-bs-ride="carousel"
                data-bs-interval="2000"

                style={{ marginTop: "90px" }}
            >
                {/* Carousel inner with images */}
                <div className="carousel-inner">
                    
                <div className="carousel-item active position-relative banner3">
                        <img src={bannerBack} className="d-block w-100" alt="Slide 3" />

                        <div className="text-box">
                            <h1 className="position-absolute banner-text animateText">
                                HDMI <br />
                                CABLE
                            </h1>
                        </div>

                        <div 
                        // className="animate__animated animate__fadeInUp"
                        >
                            <img src={cable} alt="item" className="position-absolute banner-item animate" style={{ top: "55%" }} />
                        </div>

                    </div>
                   
                    <div className="carousel-item active position-relative banner2">
                        <img src={bannerBack} className="d-block w-100" alt="Slide 2" />
                        <div className="text-box">
                            <h1 className="position-absolute banner-text animateText" >
                                Stylus  <br /> Pen
                            </h1>
                        </div>

                        <div 
                        // className="animate__animated animate__fadeInUp"
                        >
                            <img src={pen} alt="item" className="position-absolute banner-item  pen-item animate" />
                        </div>

                    </div>

                     <div className="carousel-item active position-relative banner1">
                        <img src={bannerBack} className="d-block w-100" alt="Slide 1" />
                        <div className="text-box">
                            <h1 className="position-absolute banner-text animateText">
                                UC-100 <br /> Camera
                            </h1>
                        </div>

                        <div 
                        // className="animate__animated animate__fadeInUp"
                        >
                            <img src={itemPic} alt="item" className="position-absolute banner-item animate" />
                        </div>
                    </div>

                </div>

                {/* Previous and Next controls */}
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <div className="d-flex justify-content-center align-items-center banner-control" >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </div>
                    <span className="visually-hidden">Previous</span>
                </a>

                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <div className="d-flex justify-content-center align-items-center banner-control">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </div>
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

            {/* <section className="reviews-section">
                <Reviews />
            </section> */}

            <section className="vision mt-5">
                <div className="viosion-container">
                    <div className="text-center pt-5 pb-3">
                        <h1>VISION</h1>
                    </div>

                   <div className="d-flex justify-content-center">
                   <div className="text-center container" >
                        <p>NIOTEK vision is to work in sync with INDIA’s vision of Digital India to provide high-quality MADE In INDIA products to Indian and global markets. We believe in our motto that “Dreamers Shape the Future” and we are determined to stand true by it.
                        </p>
                        <p>NIOTEK works closely with and for – Government Projects, System Integrators, Partners, Complementing Brands - in various Business Verticals such as Government, Enterprise Corporates, IT, Infra, Health, Hospitality, Institutions, with the objective to strengthen the space of Unified Communication.</p>
                    </div>
                   </div>
                </div>
            </section>




        </div>
    );
};

export default Home;

import React from "react";
import '../assets/style/product.css';
import pannal from "../assets/Img/pannal.png";
import podium from "../assets/Img/podium.png";
import camera from "../assets/Img/item cam.png";
import cable from "../assets/Img/item cable.png";
import pen from "../assets/Img/item pen.png";

const Product = () => {
    return (
        <div className="products py-5" style={{ backgroundColor: "#F2F2F2" }}>
            <div className="container " >
                <div className="row g-4">
                    {/* First row */}
                    <div className="col-md-4">
                        <div className="category-card gradient-bg-1">
                            <div className="category-overlay">
                                <h2>Podium</h2>
                            </div>

                            <img src={podium}
                                alt="LED Display"
                                className="product-image image1-1"

                               
                            />

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="category-card gradient-bg-2">
                            <img src={camera} alt="Projector" className="product-image image1"
                                
                            />
                            <div className="category-overlay">
                                <h2>Camera UC-A100</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="category-card gradient-bg-3">
                            <img src={cable} alt="Accessories" className="product-image image2"
                               
                            />
                            <div className="category-overlay">
                                <h2>HDMI <span style={{ fontSize: "20px", fontWeight: "400" }}>(upto 20m)</span></h2>
                            </div>
                        </div>
                    </div>

                    {/* Second row */}
                    <div className="col-md-6">
                        <div className="category-card gradient-bg-4">
                            <img src={pannal} alt="Interactive Panel" className="product-image image3"
                               
                            />
                            <div className="category-overlay">
                                <h2>Interactive Panel</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="category-card gradient-bg-5">
                            <img src={pen} alt="Converters" className="product-image image4"
                               
                            />
                            <div className="category-overlay">
                                <h2>Stylus Pen</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
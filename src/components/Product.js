import React from "react";
import '../assets/style/product.css';
import Led from "../assets/Img/Led.png";
import pannal from "../assets/Img/pannal.png";
import projector from "../assets/Img/projector.png";
import accessories from "../assets/Img/acc.png"
import converter from "../assets/Img/converter.png";

const Product = () => {
    return (
        <div className="products py-5" style={{ backgroundColor: "#F2F2F2" }}>
            <div className="container " >
                <div className="row g-4">
                    {/* First row */}
                    <div className="col-md-4">
                        <div className="category-card gradient-bg-1">
                            <div className="category-overlay">
                                <h2>LED Displays</h2>
                            </div>

                            <img src={Led}
                                alt="LED Display"
                                className="product-image"

                                style={{
                                    width: "26rem",
                                    marginTop: "6rem",
                                    marginRight: "1rem",
                                }}
                            />

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="category-card gradient-bg-2">
                            <img src={projector} alt="Projector" className="product-image"
                                style={{
                                    width: "25rem",
                                    marginTop: "6rem",
                                    marginLeft: "1rem",
                                }}
                            />
                            <div className="category-overlay">
                                <h2>Projectors</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="category-card gradient-bg-3">
                            <img src={accessories} alt="Accessories" className="product-image"
                                style={{
                                    width: "19rem",
                                    marginTop: "1rem",
                                    marginBottom: "0",
                                    marginLeft: "7rem",
                                    marginRight: "0",
                                }}
                            />
                            <div className="category-overlay">
                                <h2>Accessories</h2>
                            </div>
                        </div>
                    </div>

                    {/* Second row */}
                    <div className="col-md-6">
                        <div className="category-card gradient-bg-4">
                            <img src={pannal} alt="Interactive Panel" className="product-image" 
                             style={{
                                width: "26.5rem",
                                marginTop: "2.5rem",
                                marginBottom: "0",
                                marginLeft: "13.6rem",
                                
                            }}
                            />
                            <div className="category-overlay">
                                <h2>Interactive Panel</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="category-card gradient-bg-5">
                            <img src={converter} alt="Converters" className="product-image"
                             style={{
                                width: "23rem",
                                marginTop: "2.7rem",
                                marginBottom: "0",
                                marginLeft: "16.7rem",
                                
                            }}
                            />
                            <div className="category-overlay">
                                <h2>Converters</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
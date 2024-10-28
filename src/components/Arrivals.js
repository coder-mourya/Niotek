import React from 'react';
import "../assets/style/arrivals.css";
import converters from "../assets/Img/converters.png";
import ledWall from "../assets/Img/led wall.png";
import webcam from "../assets/Img/web cam.svg";
import tablelemp from "../assets/Img/table lemp.png";
import ops from "../assets/Img/ops.png";
import audio from "../assets/Img/audio.png";

const Arrivals = () => {
    return (
        <div className="container my-5">
            {/* Heading Section */}
            <div className="text-center mb-5">
                <h1>Explore Our Newest Arrivals</h1>
                <div className='d-flex justify-content-center'>
                    <p className="text-muted" style={{width:"70%"}}>
                    Niotek the game-changing innovation. Unlock new experiences, amplify productivity and unleash your creativity with India's most advanced tech.
                    </p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="row product-card-2">
                {/* Product 1 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={converters} alt="LA Tablet SY-2381" className="img-fluid rounded" />
                        <p className="mt-3">Converters</p>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={audio} alt="GRD Headphone TC-911" className="img-fluid rounded" />
                        <p className="mt-3">Audio</p>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={ledWall} alt="Sumsang Venus G34" className="img-fluid rounded" />
                        <p className="mt-3">Active LED Walls</p>
                    </div>
                </div>

                {/* Product 4 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={webcam} alt="PB Daya 2000" className="img-fluid rounded" />
                        <p className="mt-3">Webcam</p>
                    </div>
                </div>

                {/* Product 5 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={tablelemp} alt="Banana Watch N Series" className="img-fluid rounded" />
                        <p className="mt-3">Studio Accessories</p>
                    </div>
                </div>

                {/* Product 6 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={ops} alt="Drone NGY 6522" className="img-fluid rounded" />
                        <p className="mt-3">OPS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Arrivals;

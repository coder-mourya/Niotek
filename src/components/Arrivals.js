import React from 'react';
import "../assets/style/arrivals.css";
import tablet from "../assets/Img/tablet.png";
import grd from "../assets/Img/grd.png";
import camera from "../assets/Img/pb.png";
import projector2 from "../assets/Img/projector2.png";
import software from "../assets/Img/software.png";

const Arrivals = () => {
    return (
        <div className="container my-5">
            {/* Heading Section */}
            <div className="text-center mb-5">
                <h1>Explore Our Newest Arrivals</h1>
                <div className='d-flex justify-content-center'>
                    <p className="text-muted" style={{width:"60%"}}>
                        At et auctor leo convallis facilisi lectus arcu. Pellentesque non amet arcu pulvinar volutpat
                        velit morbi dolor nec. Nunc at amet feugiat turpis pulvinar mauris velit pharetra hac.
                    </p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="row product-card-2">
                {/* Product 1 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={tablet} alt="LA Tablet SY-2381" className="img-fluid rounded" />
                        <p className="mt-3">LA Tablet SY-2381</p>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={grd} alt="GRD Headphone TC-911" className="img-fluid rounded" />
                        <p className="mt-3">GRD Headphone TC-911</p>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={camera} alt="Sumsang Venus G34" className="img-fluid rounded" />
                        <p className="mt-3">Sumsang Venus G34</p>
                    </div>
                </div>

                {/* Product 4 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={camera} alt="PB Daya 2000" className="img-fluid rounded" />
                        <p className="mt-3">PB Daya 2000</p>
                    </div>
                </div>

                {/* Product 5 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={projector2} alt="Banana Watch N Series" className="img-fluid rounded" />
                        <p className="mt-3">Banana Watch N Series</p>
                    </div>
                </div>

                {/* Product 6 */}
                <div className="col-md-4 col-sm-6">
                    <div className="product-card text-center">
                        <img src={software} alt="Drone NGY 6522" className="img-fluid rounded" />
                        <p className="mt-3">Drone NGY 6522</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Arrivals;

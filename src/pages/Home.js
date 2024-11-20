import React, { useEffect } from "react";
import Product from "../components/Product";
import Arrivals from "../components/Arrivals";
// import Reviews from "../components/Reviews";
import "../assets/style/navbar.css";
import bannerBack from "../assets/Img/banner-back.png"
import "../assets/style/style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchBanners } from "../redux/bannerSlice";


const Home = () => {
    const dispatch = useDispatch();
    const banners = useSelector((state) => state.banner.banners);
    console.log("banners", banners);


    useEffect(() => {
        dispatch(fetchBanners());
    }, [dispatch])

    const activeBanners = banners?.filter((banner) => banner.isActive) // Only active banners
        .sort((a, b) => Number(a.sequence) - Number(b.sequence));

    return (
        <div className="home" style={{ transition: "margin-top 0.3s ease-in-out" }}>
            {/* Carousel Section */}
            <div
                id="carouselExampleIndicators"
                className="carousel slide "
                data-bs-ride="carousel"
                data-bs-interval="3000"
                style={{ marginTop: "90px" }}
            >
                {/* Carousel inner with images */}
                <div className="carousel-inner">

                    {activeBanners?.map((banner, index) => (

                        <div key={index} className={`carousel-item   position-relative banner1 ${banner?.sequence === "1" ? "active" : ""}`}
                            style={{
                                backgroundColor: banner?.color
                            }}
                        >

                            <div>

                                <img src={banner?.image} style={{
                                    width: "60%",
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    opacity: "0.4"
                                }} alt="background" />
                            </div>

                            <img src={bannerBack} className="d-block w-100" alt="Slide 1"  style={{zIndex: "100"}}/>

                            <div className="text-box">
                                <h1 className="position-absolute banner-text animateText" style={{ width: "350px", textTransform: "uppercase" }}>
                                    {banner?.title}
                                </h1>
                            </div>

                            <div>
                                <img src={banner?.image} alt="item"
                                    className="position-absolute banner-item animate"
                                    // style={{ width: "500px", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    ))

                    }

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



            {/* 
           
            <Model show={show} onHide={handleClose} centered>
               
                <div style={{ position: 'relative', padding: '0', backgroundColor: 'white', borderRadius: '10px' }}>
                   
                    <button
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            top: '-10px',  // Moves the button up a bit from the image
                            right: '-10px', // Moves the button to the right edge of the modal
                            backgroundColor: 'white',
                            border: '2px solid #ddd',
                            borderRadius: '50%',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            fontSize: '18px',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                            color: '#333',
                            fontWeight: 'bold'
                        }}
                    >
                        &times;
                    </button>

                    <div className="d-flex justify-content-center align-items-center">
                        <img src={Diwali} className="rounded" alt="diwali" style={{ width: '100%', borderRadius: '8px' }} />
                    </div>
                </div>
            </Model>
           */}








        </div>
    );
};

export default Home;

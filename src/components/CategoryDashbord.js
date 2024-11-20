import React, { useState } from "react";
import download from "../assets/Img/download.png"
// import camera from "../assets/Img/NIO 1.png"
// import pdf from "../assets/pdf/camera.pdf"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CategoryDashbord = () => {
    const [selectedOption, setSelectedOption] = useState("PTZ 4K");
    const location = useLocation();
    const category = location?.state?.category;
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    // console.log("catgory in dashbord",category);
    console.log("products in dashbord", products);


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleOptionsChange = (option) => {
        setSelectedOption(option);
    };

    const PTZ4K = () => {
        const filteredProducts = products?.filter(
            (product) => product.category === category?.name
        );
    
        return (
            <div className="container PTZ4K mb-5">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id} // Assuming each product has a unique `id`
                            className="row rounded pt-5 pb-5 mb-3"
                            style={{ backgroundColor: "#F3F7FB" }}
                        >
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <img src={product?.image} alt="camera" />
                            </div>
    
                            <div className="col-md-8">
                                <h2 style={{ textTransform: "capitalize" }}>{product?.name}</h2>
                                <p>{product?.description}</p>
    
                                <div className="mt-4 d-flex justify-content-center justify-content-md-start">
                                    <a
                                        href={product?.file}
                                        download
                                        className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"
                                    >
                                        <img
                                            src={download}
                                            alt="download"
                                            className="me-2"
                                            style={{ width: "20px" }}
                                        />{" "}
                                        Download pdf
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">
                        <h2>No products found for this category.</h2>
                    </div>
                )}
            </div>
        );
    };
    

    const FSD = () => {
        return (
            <div className="container PTZ4K mb-5" >

                <div className="text-center">
                    <h2>coming soon</h2>
                </div>



            </div>
        );
    };

    const UCVideoBar = () => {
        return (
            <div className="container PTZ4K mb-5" >

                <div className="text-center">
                    <h2>coming soon</h2>
                </div>



            </div>
        );
    };

    const WebCam = () => {
        return (
            <div className="container PTZ4K mb-5" >

                <div className="text-center">
                    <h2>coming soon</h2>
                </div>



            </div>
        );
    };

    const renderSelectedComponent = () => {
        switch (selectedOption) {
            case "PTZ 4K":
                return <PTZ4K />;
            case "FSD":
                return <FSD />;
            case "UC Video Bar":
                return <UCVideoBar />;
            case "Web Cam":
                return <WebCam />;
            default:
                return null;
        }
    };

    return (
        <div className="camera">
            <div className="camera-header d-flex justify-content-center align-items-center">
                <h1 style={{ textTransform: "capitalize" }}>{category?.name}</h1>
            </div>

            <div className="container camera-contant">
                <div className="camera-options d-flex justify-content-center mt-5 row ">
                    <button onClick={() => handleOptionsChange("PTZ 4K")} className={`btn mb-3 col ${selectedOption === "PTZ 4K" ? "btn-primary" : "btn-outline-secondary"}`}>
                        PTZ 4K
                    </button>
                    <button onClick={() => handleOptionsChange("FSD")} className={`btn col mb-3 ${selectedOption === "FSD" ? "btn-primary" : "btn-outline-secondary"}`}>
                        FHD
                    </button>
                    <button onClick={() => handleOptionsChange("UC Video Bar")} className={`btn col mb-3 ${selectedOption === "UC Video Bar" ? "btn-primary" : "btn-outline-secondary"}`}>
                        UC Video Bar
                    </button>
                    <button onClick={() => handleOptionsChange("Web Cam")} className={`btn col mb-3 ${selectedOption === "Web Cam" ? "btn-primary" : "btn-outline-secondary"}`}>
                        Web Cam
                    </button>
                </div>
            </div>

            <div className="camera-content container mt-5">
                {renderSelectedComponent()}
            </div>
        </div>
    );
};

export default CategoryDashbord;

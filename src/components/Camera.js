import React, { useState } from "react";
import download from "../assets/Img/download.png"
import camera from "../assets/Img/NIO 1.png"

const Camera = () => {
    const [selectedOption, setSelectedOption] = useState("PTZ 4K");

    const handleOptionsChange = (option) => {
        setSelectedOption(option);
    };

    const PTZ4K = () => {
        return (
            <div className="container PTZ4K mb-5" >
                <div className="row rounded pt-5 pb-5 mb-3" style={{ backgroundColor: "#F3F7FB" }}>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={camera} alt=" camera" />
                    </div>

                    <div className="col-md-8">
                        <h2 >UC-A100 Camera</h2>
                        <p>Designed for corporate executive meetings, professional broadcasting, educational recordings, and more, the NIOTEK UC-A100 Pan-Tilt-Zoom (PTZ) Camera feature SONY's latest 1/2.5-inch UHD CMOS sensor, delivering 4K video quality. Equipped with a 12x optical zoom lens and equipped with Al humanoid tracking algorithms.
                        </p>

                        <p>The NIOTEK UC-A100 stands out as the premier 4K PTZ camera, making it an excellent choice for businesses seeking top-tier performance.</p>

                        <div className="mt-4">
                            <button className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                        </div>
                    </div>


                </div>

                <div className="row rounded pt-5 pb-5 mb-3" style={{ backgroundColor: "#F3F7FB" }}>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={camera} alt=" camera" />
                    </div>

                    <div className="col-md-8">
                        <h2 >UC-A100 Camera</h2>
                        <p>Designed for corporate executive meetings, professional broadcasting, educational recordings, and more, the NIOTEK UC-A100 Pan-Tilt-Zoom (PTZ) Camera feature SONY's latest 1/2.5-inch UHD CMOS sensor, delivering 4K video quality. Equipped with a 12x optical zoom lens and equipped with Al humanoid tracking algorithms.
                        </p>

                        <p>The NIOTEK UC-A100 stands out as the premier 4K PTZ camera, making it an excellent choice for businesses seeking top-tier performance.</p>

                        <div className="mt-4">
                            <button className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                        </div>
                    </div>


                </div>

                <div className="row rounded pt-5 pb-5 mb-3" style={{ backgroundColor: "#F3F7FB" }}>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={camera} alt=" camera" />
                    </div>

                    <div className="col-md-8">
                        <h2 >UC-A100 Camera</h2>
                        <p>Designed for corporate executive meetings, professional broadcasting, educational recordings, and more, the NIOTEK UC-A100 Pan-Tilt-Zoom (PTZ) Camera feature SONY's latest 1/2.5-inch UHD CMOS sensor, delivering 4K video quality. Equipped with a 12x optical zoom lens and equipped with Al humanoid tracking algorithms.
                        </p>

                        <p>The NIOTEK UC-A100 stands out as the premier 4K PTZ camera, making it an excellent choice for businesses seeking top-tier performance.</p>

                        <div className="mt-4">
                            <button className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                        </div>
                    </div>


                </div>

                <div className="row rounded pt-5 pb-5 mb-3" style={{ backgroundColor: "#F3F7FB" }}>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={camera} alt=" camera" />
                    </div>

                    <div className="col-md-8">
                        <h2 >UC-A100 Camera</h2>
                        <p>Designed for corporate executive meetings, professional broadcasting, educational recordings, and more, the NIOTEK UC-A100 Pan-Tilt-Zoom (PTZ) Camera feature SONY's latest 1/2.5-inch UHD CMOS sensor, delivering 4K video quality. Equipped with a 12x optical zoom lens and equipped with Al humanoid tracking algorithms.
                        </p>

                        <p>The NIOTEK UC-A100 stands out as the premier 4K PTZ camera, making it an excellent choice for businesses seeking top-tier performance.</p>

                        <div className="mt-4">
                            <button className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                        </div>
                    </div>


                </div>
            </div>
        );
    };

    const FSD = () => {
        return (
            <div className="container PTZ4K mb-5" >
            <div className="row rounded pt-5 pb-5 mb-3" style={{ backgroundColor: "#F3F7FB" }}>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={camera} alt=" camera" />
                </div>

                <div className="col-md-8">
                    <h2 >UC-A100 Camera</h2>
                    <p>Designed for corporate executive meetings, professional broadcasting, educational recordings, and more, the NIOTEK UC-A100 Pan-Tilt-Zoom (PTZ) Camera feature SONY's latest 1/2.5-inch UHD CMOS sensor, delivering 4K video quality. Equipped with a 12x optical zoom lens and equipped with Al humanoid tracking algorithms.
                    </p>

                    <p>The NIOTEK UC-A100 stands out as the premier 4K PTZ camera, making it an excellent choice for businesses seeking top-tier performance.</p>

                    <div className="mt-4">
                        <button className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                    </div>
                </div>


            </div>

            <div className="row rounded pt-5 pb-5 mb-3" style={{ backgroundColor: "#F3F7FB" }}>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={camera} alt=" camera" />
                </div>

                <div className="col-md-8">
                    <h2 >UC-A100 Camera</h2>
                    <p>Designed for corporate executive meetings, professional broadcasting, educational recordings, and more, the NIOTEK UC-A100 Pan-Tilt-Zoom (PTZ) Camera feature SONY's latest 1/2.5-inch UHD CMOS sensor, delivering 4K video quality. Equipped with a 12x optical zoom lens and equipped with Al humanoid tracking algorithms.
                    </p>

                    <p>The NIOTEK UC-A100 stands out as the premier 4K PTZ camera, making it an excellent choice for businesses seeking top-tier performance.</p>

                    <div className="mt-4">
                        <button className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                    </div>
                </div>


            </div>

           

           
        </div>
        );
    };

    const UCVideoBar = () => {
        return (
            <div className="container PTZ4K mb-5" >
            <div className="row rounded pt-5 pb-5 mb-3" style={{ backgroundColor: "#F3F7FB" }}>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={camera} alt=" camera" />
                </div>

                <div className="col-md-8">
                    <h2 >UC-A100 Camera</h2>
                    <p>Designed for corporate executive meetings, professional broadcasting, educational recordings, and more, the NIOTEK UC-A100 Pan-Tilt-Zoom (PTZ) Camera feature SONY's latest 1/2.5-inch UHD CMOS sensor, delivering 4K video quality. Equipped with a 12x optical zoom lens and equipped with Al humanoid tracking algorithms.
                    </p>

                    <p>The NIOTEK UC-A100 stands out as the premier 4K PTZ camera, making it an excellent choice for businesses seeking top-tier performance.</p>

                    <div className="mt-4">
                        <button className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                    </div>
                </div>


            </div>

            <div className="row rounded pt-5 pb-5 mb-3" style={{ backgroundColor: "#F3F7FB" }}>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={camera} alt=" camera" />
                </div>

                <div className="col-md-8">
                    <h2 >UC-A100 Camera</h2>
                    <p>Designed for corporate executive meetings, professional broadcasting, educational recordings, and more, the NIOTEK UC-A100 Pan-Tilt-Zoom (PTZ) Camera feature SONY's latest 1/2.5-inch UHD CMOS sensor, delivering 4K video quality. Equipped with a 12x optical zoom lens and equipped with Al humanoid tracking algorithms.
                    </p>

                    <p>The NIOTEK UC-A100 stands out as the premier 4K PTZ camera, making it an excellent choice for businesses seeking top-tier performance.</p>

                    <div className="mt-4">
                        <button className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                    </div>
                </div>


            </div>

           

           
        </div>
        );
    };

    const WebCam = () => {
        return (
            <div className="container PTZ4K mb-5" >
            <div className="row rounded  pt-5 pb-5 mb-3" style={{ backgroundColor: "#F3F7FB" }}>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={camera} alt=" camera" />
                </div>

                <div className="col-md-8">
                    <h2 >UC-A100 Camera</h2>
                    <p>Designed for corporate executive meetings, professional broadcasting, educational recordings, and more, the NIOTEK UC-A100 Pan-Tilt-Zoom (PTZ) Camera feature SONY's latest 1/2.5-inch UHD CMOS sensor, delivering 4K video quality. Equipped with a 12x optical zoom lens and equipped with Al humanoid tracking algorithms.
                    </p>

                    <p>The NIOTEK UC-A100 stands out as the premier 4K PTZ camera, making it an excellent choice for businesses seeking top-tier performance.</p>

                    <div className="mt-4">
                        <button className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                    </div>
                </div>


            </div>

            <div className="row rounded pt-5 pb-5 mb-3" style={{ backgroundColor: "#F3F7FB" }}>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={camera} alt=" camera" />
                </div>

                <div className="col-md-8">
                    <h2 >UC-A100 Camera</h2>
                    <p>Designed for corporate executive meetings, professional broadcasting, educational recordings, and more, the NIOTEK UC-A100 Pan-Tilt-Zoom (PTZ) Camera feature SONY's latest 1/2.5-inch UHD CMOS sensor, delivering 4K video quality. Equipped with a 12x optical zoom lens and equipped with Al humanoid tracking algorithms.
                    </p>

                    <p>The NIOTEK UC-A100 stands out as the premier 4K PTZ camera, making it an excellent choice for businesses seeking top-tier performance.</p>

                    <div className="mt-4">
                        <button className="btn btn-outline-primary download-btn d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                    </div>
                </div>


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
                <h1>Camera</h1>
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

export default Camera;

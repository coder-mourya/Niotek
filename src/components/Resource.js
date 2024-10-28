import React from "react";
import cameraItem from "../assets/Img/item cam.png"
import download from "../assets/Img/download.png"
import cable from "../assets/Img/cable.png"
import pen from "../assets/Img/item pen.png"
import podium from "../assets/Img/podium.png"
import pdf from "../assets/pdf/camera.pdf"

const Resource = () => {


    return (
        <div className="camera">
            <div className="camera-header d-flex justify-content-center align-items-center">
                <h1>Resources</h1>
            </div>

            <div className="Resource-contant container">
                <div className="row ">
                    <div className="col-md-3 d-flex justify-content-center">
                        <div className="rounded resource-card my-5 py-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={cameraItem} alt="camera" className="item-image" />
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <h4>UC-A100</h4>
                            </div>
                            <div className="mt-4 d-flex justify-content-center align-items-center">
                                <a href={pdf} download className="btn btn-outline-primary d-flex justify-content-center align-items-center">
                                    <img src={download} alt="download" className="me-2" style={{ width: "20px" }} />
                                    Download PDF
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3 d-flex justify-content-center">
                        <div className="rounded resource-card my-5 py-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={cable} alt="camera" className="item-image" />
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <h4>HDMI Cable</h4>
                            </div>
                            <div className="mt-4 d-flex justify-content-center align-items-center">
                                <button className="btn btn-outline-primary d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3  d-flex justify-content-center">
                        <div className="rounded resource-card my-5 py-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={pen} alt="camera" className="item-image" />
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <h4>Stylus pen</h4>
                            </div>
                            <div className="mt-4 d-flex justify-content-center align-items-center">
                                <button className="btn btn-outline-primary d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex justify-content-center">
                        <div className="rounded resource-card my-5 py-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={podium} alt="camera" className="item-image" />
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <h4>Podium</h4>
                            </div>
                            <div className="mt-4 d-flex justify-content-center align-items-center">
                                <button className="btn btn-outline-primary d-flex justify-content-center align-items-center"><img src={download} alt="download" className="me-2" style={{ width: "20px" }} /> Download pdf</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resource;

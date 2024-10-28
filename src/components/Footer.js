import React from 'react';
import logo from '../assets/Img/Logo.svg';
import '../assets/style/footer.css';
import { Link } from 'react-router-dom';
import lion from '../assets/Img/lion.svg'

const Footer = () => {
    return (
        <footer className="footer  text-light py-5" style={{ backgroundColor: "#000000" }}>
            <div className="container">
                <div className="row">
                    {/* Company Logo and Description */}
                    <div className="col-md-4">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <p className='mt-4' style={{
                            width: "80%"
                        }}>Dreamers Shape the Future</p>

                        <div className="social-icons d-flex my-3">
                            <a href="/" className="text-gray-300 btn btn-square"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="/" className="text-gray-300 btn btn-square"><i class="fa-brands fa-twitter"></i></a>
                            <a href="/" className="text-gray-300 btn btn-square"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="/" className="text-gray-300 btn btn-square"><i class="fa-brands fa-instagram"></i></a>
                        </div>

                        <div className='d-flex justify-content-start align-items-center  position-relative'>
                            <img src={lion} alt="lion"  className='lion-image'/>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="col-md-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to={'/about'}>About</Link></li>
                            <li><a href="/" >Solutions</a></li>
                            <li><a href="/" >Partners</a></li>
                            <li><a href="/" >Support</a></li>
                        </ul>
                    </div>

                    {/* Products Section */}
                    <div className="col-md-3">
                        <h5>Products</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" >Interactive Panel</a></li>
                            <li><a href="/" >4K Camera Setup</a></li>
                            <li><a href="/" >LED Displays</a></li>
                            <li><a href="/" >Interactive Projectors</a></li>
                            <li><a href="/" >Capture Systems</a></li>
                            <li><a href="/" >Accessories</a></li>
                            <li><a href="/" >Softwares</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-3 contact">

                        <p className='py-0 mb-0'>DM us on:</p>
                        <p className='pt-0 text-light' ><a href="mailto:info@niotek.in" className="text-light text-decoration-none">info@niotek.in</a></p>

                        <p className='py-0 mb-0'>Call us on:</p>
                        <p className='pt-0 text-light'><a href="tel:+919717992260" className="text-light text-decoration-none">+91 9717992260</a></p>

                        <p>Find us: <br />
                            <span className='text-light'>
                                AltF Coworking 101, NH-19, CRRI, 3rd Floor, Unit no.339, Ishwar Nagar, Okhla, New Delhi-110044
                            </span>
                        </p>
                    </div>
                </div>
                <hr style={{ color: "#434343" }} />
                {/* Footer Bottom */}
                <div className="row mt-4 footer-bottom">
                    <div className="col d-flex justify-content-between">
                        <p >© 2024 Niotek. All rights reserved.</p>
                        <div>
                            <a href="/" >Terms & Conditions</a> | <a href="/">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

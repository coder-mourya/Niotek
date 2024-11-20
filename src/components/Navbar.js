import React, { useEffect } from 'react';
import logo from "../assets/Img/Logo.svg";
import "../assets/style/navbar.css";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { useForm, ValidationError } from '@formspree/react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/categorySlice';
import { BassUrl } from '../utils/BassUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const closeNavbar = () => setIsExpanded(false);
    const categories = useSelector(state => state.category.categories);
    // console.log("categories", categories);
    const Navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);


    // Function to handle hover to open dropdown
    const handleHover = (event) => {
        const dropdown = event.currentTarget.querySelector('.dropdown-menu');
        dropdown.classList.add('show');
    };

    // Function to handle mouse leave to close dropdown
    const handleLeave = (event) => {
        const dropdown = event.currentTarget.querySelector('.dropdown-menu');
        dropdown.classList.remove('show');
    };

    // Handle toggling the navbar in mobile view
    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);

    };

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth > 768 && isExpanded) {
    //             setIsExpanded(false);
    //             setIsNavbarExpanded(false);
    //         }
    //     };

    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, [isExpanded, setIsNavbarExpanded]);



    // contact sales 

    const [showSales, setShowSales] = useState(false);
    const handleShowSales = () => {
        setShowSales(true);
    }

    const handleCloseSales = () => {
        setShowSales(false);
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        companyName: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    // const formRef = useRef(null);
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault(); // Prevents page reload on form submit

    //     const formData = new FormData(formRef.current);
    //     const formObject = Object.fromEntries(formData.entries());

    //     try {
    //         const response = await fetch("https://formspree.io/f/movqjzqp", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(formObject),
    //         });

    //         if (response.ok) {
    //             toast.success("Form submitted successfully!");
    //             setFormData({
    //                 name: '',
    //                 email: '',
    //                 number: '',
    //                 companyName: '',
    //                 message: ''
    //             });
    //             handleCloseSales();
    //         } else {
    //             toast.error("Error submitting form. Please try again later.");
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         toast.error("Error submitting form. Please try again later.");
    //     }
    // };

    const handleFormSubmit = async () => {
        const url = BassUrl();
        const data = {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            companyName: formData.companyName,
            message: formData.message
        }

        console.log("data send", data);

        try {
            const response = await axios.post(`${url}/api/enquiry`, data)

            if (response.status === 200) {
                toast.success("Form submitted successfully!");
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    companyName: '',
                    message: ''
                });
                handleCloseSales();
            }
        } catch (error) {
            if (error.response) {
                // The server responded with a non-2xx status
                toast.error(error.response.data.message || "Something went wrong");
                console.log(error.response.data);

            } else if (error.request) {
                // The request was made but no response was received
                toast.error("No response from server. Please try again.");
            } else {
                // Other errors (e.g., setup issues)
                toast.error("Error in making the request.");
            }
        }
    }

    const handleCategoryClick = (category) => {
        console.log("category", category);
        
            closeNavbar();
            Navigate(`/categoryDashbord`,  { state: { category } });
    }


    return (
        <div className={`Navbar-container`}  >
            <nav className="navbar navbar-expand-lg  navbar-light "
                style={{
                    height: "90px",
                    backgroundColor: "#ffffff",
                }}
            >
                <div className="container-fluid ">
                    {/* Logo on the left side */}
                    <a className="navbar-brand " href="/"

                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: '140px' }}
                        />
                    </a>

                    {/* Toggle button for mobile view */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        onClick={toggleNavbar}
                        aria-label="Toggle navigation"

                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar items on the right side */}
                    <div className={`collapse  navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarNav">


                        <ul className="navbar-nav  ms-auto">
                            {/* Products Dropdown */}
                            <li className="nav-item dropdown " onMouseEnter={handleHover} onClick={handleHover} onMouseLeave={handleLeave}>
                                <a
                                    className="nav-link "
                                    href="/"
                                    id="productsDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Products <i className="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul className="dropdown-menu category-list" aria-labelledby="productsDropdown">

                                    {categories?.filter((item) => item.isActive) // Only include active categories
                                        .map((item) => (
                                            <li key={item.id} className='dropdown-item' onClick={() => handleCategoryClick(item)} style={{cursor:"pointer"}}> 
                                                {/* <Link to={"/cameras"} className="dropdown-item" onClick={closeNavbar}>
                                                    {item?.name}
                                                </Link> */}
                                                {item?.name}
                                            </li>
                                        ))}


                                </ul>
                            </li>
                            {/* Solutions Dropdown */}
                            <li className="nav-item dropdown" onMouseEnter={handleHover} onClick={handleHover} onMouseLeave={handleLeave}>
                                <a
                                    className="nav-link "
                                    href="/"
                                    id="solutionsDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Solutions <i className="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                                    <li><a className="dropdown-item" href="/">Business Solutions</a></li>
                                    <li><a className="dropdown-item" href="/">Education Solutions</a></li>
                                    <li><a className="dropdown-item" href="/">Display Solutions</a></li>
                                </ul>
                            </li>

                            {/* Partners (Not a dropdown) */}
                            <li className="nav-item Partners">
                                <a className="nav-link" href="/" style={{ color: '#1D1D1D', marginRight: '1rem', fontWeight: '600' }}>
                                    Partners
                                </a>
                            </li>

                            {/* Support Dropdown */}
                            {/* <li className="nav-item dropdown" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                                <a
                                    className="nav-link "
                                    href="/"
                                    id="supportDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Support <i className="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="supportDropdown">
                                    <li><a className="dropdown-item" href="/">Warranty Policy</a></li>
                                    <li><a className="dropdown-item" href="/">Help Center</a></li>
                                    <li><a className="dropdown-item" href="/">Contact Support</a></li>
                                    <li><a className="dropdown-item" href="/">Download Center</a></li>
                                    <li><a className="dropdown-item" href="/">Tutorial Video</a></li>
                                    <li><a className="dropdown-item" href="/">Service Request</a></li>
                                </ul>
                            </li> */}

                            <li className="nav-item Partners">
                                <a className="nav-link" href="/" style={{ color: '#1D1D1D', marginRight: '1rem', fontWeight: '600' }}>
                                    Support
                                </a>
                            </li>

                            <li className="nav-item Partners">
                                <Link to={'/resources'} className='nav-link' style={{ color: '#1D1D1D', marginRight: '1rem', fontWeight: '600' }} onClick={closeNavbar}> Resources</Link>
                            </li>

                            {/* About Us Dropdown */}
                            {/* <li className="nav-item dropdown" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                                <a
                                    className="nav-link "
                                    href="/"
                                    id="aboutDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    About Us <i className="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                                    <li><a className="dropdown-item" href="/">Company</a></li>
                                    <li><a className="dropdown-item" href="/">News & Events</a></li>
                                    <li><a className="dropdown-item" href="/">Customer Stories</a></li>
                                    <li><a className="dropdown-item" href="/">Contact us</a></li>
                                </ul>
                            </li> */}

                            <li className="nav-item Partners">
                                {/* <a className="nav-link" href="/" >
                                    About us
                                </a> */}
                                <Link to={"/about"} className='nav-link' style={{ color: '#1D1D1D', marginRight: '1rem', fontWeight: '600' }} onClick={closeNavbar}>About us</Link>
                            </li>

                            {/* Contact Sales Button */}
                            <li className="nav-item">
                                <button className='btn btn-primary ms-3'
                                    onClick={handleShowSales}
                                >Contact Sales</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* offcanvas menu */}
            <Offcanvas show={showSales} onHide={handleCloseSales} placement="end" className="contact-offcanvas">
                <Offcanvas.Header>
                    <Offcanvas.Title> <h4>Get in touch</h4> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <div className="contact">
                        <ToastContainer />
                        <form className="form" >
                            <div className="form-group">
                                <label htmlFor="name" className='form-label'>Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className='form-control'
                                    placeholder='Enter your name'
                                    onChange={handleChange}
                                    value={formData.name}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="email">Email address:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='Enter your email'
                                    className='form-control'
                                    onChange={handleChange}
                                    value={formData.email}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="mobile">Mobile number:</label>
                                <input
                                    type="number"
                                    id="mobile"
                                    name="mobile"
                                    placeholder='Enter your number'
                                    className='form-control'
                                    onChange={handleChange}
                                    value={formData.mobile}
                                    required
                                />

                            </div>

                            <div className="form-group">
                                <label htmlFor="companyName" className='form-label'>Company Name:</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    className='form-control'
                                    placeholder='Enter your company name'
                                    onChange={handleChange}
                                    value={formData.companyName}
                                    required
                                />

                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className='form-control'
                                    placeholder='Enter your message'
                                    required
                                    onChange={handleChange}
                                    value={formData.message}
                                ></textarea>

                            </div>

                        </form>
                    </div>
                </Offcanvas.Body>
                <div>

                    <div className='d-flex justify-content-center' style={{ marginBottom: "5rem" }}>
                        <button className='btn btn-primary' onClick={handleFormSubmit} style={{ width: "100%" }}>Submit</button>
                    </div>

                    <hr />
                    <div className='d-flex row '>
                        <div className='text-center col-6' style={{ borderRight: "1px solid #D9D9D9" }}>
                            <p className='mb-0' style={{ color: "#1565BD" }}>DM us on:</p>
                            <p>info@niotek.in</p>
                        </div>

                        <div className='text-center col-6'>
                            <p className='mb-0' style={{ color: "#1565BD" }}>Call us on:</p>
                            <a href="tel:+919717992260" className="text-dark text-decoration-none">+91 9717992260</a>
                        </div>
                    </div>
                </div>
            </Offcanvas>
        </div>
    )
}

export default Navbar


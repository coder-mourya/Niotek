import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPages } from "../redux/pageSlice";


const PagesDashboard = () => {
    const location = useLocation();
    const { category } = location?.state || {};
    console.log("category:", category); // Log category to confirm it's received correctly
    

    const dispatch = useDispatch();
    const pages = useSelector((state) => state.pages.pages);
    console.log("pages in dashboard:", pages);

    useEffect(() => {
        dispatch(fetchPages());
    }, [dispatch]);

    // Filter active pages
    const filteredPages = pages?.filter(
        (page) => page?.isActive && page?.title?.toLowerCase() === category?.toLowerCase()
    );

    return (
        <div className="camera">
            {/* Header */}
            {filteredPages.map((page) => (
                <div className="camera-header d-flex justify-content-center align-items-center">
                    <h1 style={{ textTransform: "capitalize" }}> {page?.title} </h1>
                </div>
            ))

            }

            {/* Content */}
            <div className="camera-content container mt-5">
                <div className="container PTZ4K mb-5">
                    {filteredPages.length > 0 ? (
                        filteredPages.map((page) => (
                            <div>
                                <p>{page?.discription}</p>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <h2>No active pages found for this category.</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PagesDashboard;

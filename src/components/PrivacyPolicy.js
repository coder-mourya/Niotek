import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPages } from "../redux/pageSlice";


const PrivacyPolicy = () => {
    const dispatch = useDispatch();
    const pages = useSelector((state) => state.pages.pages);
    console.log("pages in privacy:", pages);

    useEffect(() => {
        dispatch(fetchPages());
    }, [dispatch]);

    // Filter active pages
    const filteredPages = pages?.filter((page) => {
        const categoryKeywords = [ "policy", "privacy"]; // Add more keywords as needed
        const regex = new RegExp(categoryKeywords.join("|"), "i"); // Case-insensitive regex match
        return page?.isActive && regex.test(page?.title?.toLowerCase());
    });
    

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

export default PrivacyPolicy;

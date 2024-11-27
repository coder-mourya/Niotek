import {configureStore} from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
import pagesReducer from "./pageSlice";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import bannersReducer from "./bannerSlice";
// import enquiryReducer from "./enquirySlice";

const store = configureStore({
    reducer: {
        // user: userReducer,
        pages: pagesReducer,
        product: productReducer,
        category: categoryReducer,
        banner: bannersReducer,
        // enquiry: enquiryReducer
    }
})

export default store
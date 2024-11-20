const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    mobile : {
        type: String,
        required: true
    }
});

const Enquiry = mongoose.model("Enquiry", EnquirySchema);

module.exports = Enquiry;
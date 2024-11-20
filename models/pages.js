const mongoose = require("mongoose");

const PagesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    discription: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Pages = mongoose.model("Pages", PagesSchema);

module.exports = Pages;
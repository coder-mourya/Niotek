const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    isActive : {
        type : Boolean,
        default : true
    },
    sequence : {
        type : String,
        required : true
    },
    color : {
        type : String,
        required : true
    }
})

const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner
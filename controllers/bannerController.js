const Banner = require("../models/banner");
const upload = require("../config/s3");
const AWS = require('aws-sdk');
const mongoose = require("mongoose");

// upload banner

const uploadBanner = async (req, res) => {
    const { title , sequence, color } = req.body

    //  check title and image 
    if(!title){
        return res.status(400).send({ message: 'Title is required' });
    }

    if(!req.files.image){
        return res.status(400).send({ message: 'Image is required' });
    }

    if(!sequence){
        return res.status(400).send({ message: 'Sequence is required' });
    }

    if(!color){
        return res.status(400).send({ message: 'Color is required' });
    }

    try {
        const imageUrl = req.files.image ? req.files.image[0].location : null;
        const banner = new Banner({
            title,
            image: imageUrl,
            sequence: sequence,
            color: color
         })

        await banner.save();

        res.status(200).send({
            message: 'Banner uploaded successfully',
            banner
        })
    } catch (error) {
        res.status(500).send({ message: 'Failed to save banner', error });
    }
}

// get all banner
const getAllBanner = async (req, res) => {
    try {
        const banner = await Banner.find();
        res.status(200).send(banner);
    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve banner', error });
    }
}


//  delete banner 
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const deleteBanner = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the banner by ID
        const banner = await Banner.findById(id);

        if (!banner) {
            return res.status(404).send({ message: 'Banner not found' });
        }

        // Ensure image field exists
        if (!banner.image) {
            return res.status(400).send({ message: 'Banner image not found in database' });
        }

        // Extract the S3 key from the image URL
        const imageUrl = banner.image;
        const s3Key = imageUrl.split('/').slice(-1)[0];

        // Debug: Log extracted S3 key and params
        console.log(`Deleting S3 Key: ${s3Key}`);

        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: s3Key,
        };

        // Delete the image from S3
        const deleteResult = await s3.deleteObject(params).promise();

        // Debug: Log S3 delete response
        console.log('S3 Delete Result:', deleteResult);

        // Delete the banner from MongoDB
        await Banner.findByIdAndDelete(id);

        res.status(200).send({
            message: 'Banner deleted successfully',
        });
    } catch (error) {
        // Debug: Log the error details
        console.error('Error deleting banner:', error);

        res.status(500).send({ 
            message: 'Failed to delete banner', 
            error: error.message || error 
        });
    }
};

// const deleteBanner = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const banner = await Banner.findByIdAndDelete(id);

//         if (!banner) {
//             return res.status(404).send({ message: 'Banner not found' });

//         }

//         res.status(200).send({
//             message: 'Banner deleted successfully',
//             banner
//         })

//     } catch (error) {
//         res.status(500).send({ message: 'Failed to delete banner', error });
//     }
// }

// update banner status 

const updateBannerStatus = async (req, res) => {
    const { id } = req.params;
    const { isActive } = req.body;

    if (typeof isActive !== "boolean") {
        return res.status(400).send({ message: 'isActive field must be a boolean.' });
    }

    try {
        const banner = await Banner.findByIdAndUpdate(
            id,
            { isActive },
            { new: true }
        )

        if (!banner) {
            return res.status(404).send({ message: 'Banner not found' });
        }

        res.status(200).send({
            message: 'Banner status updated successfully',
            banner
        })
    } catch (error) {
        res.status(500).send({ message: 'Failed to update banner status', error });
    }
}


const editBanner = async (req, res) => {
    console.log("Request body:", req.body);

    const { id } = req.params; // Banner ID
    const { title, sequence, color } = req.body;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid banner ID format." });
    }

    if(!title){
        return res.status(400).send({ message: "Title field is required." });
    }

    if(!sequence){
        return res.status(400).send({ message: "Sequence field is required." });
    }

    if(!color){
        return res.status(400).send({ message: "Color field is required." });
    }

    // if (!(req.files && req.files.image)) {
    //     return res.status(400).send({ message: "Image field is required." });
    // }

    try {
        // Prepare the fields to update
        const updates = {};
        if (title) updates.title = title;
        if (sequence) updates.sequence = sequence;
        if (color) updates.color = color;

        // Handle image update
        if (req.files && req.files.image && req.files.image.length > 0) {
            updates.image = req.files.image[0].location;
        }

        // Find and update the banner
        const updatedBanner = await Banner.findByIdAndUpdate(
            id,
            updates,
            { new: true, omitUndefined: true } // Return the updated document
        );

        // If no banner is found
        if (!updatedBanner) {
            return res.status(404).send({ message: "Banner not found." });
        }

        // Send the updated banner as a response
        res.status(200).send({
            message: "Banner updated successfully.",
            banner: updatedBanner,
        });
    } catch (error) {
        console.error("Error updating banner:", error);
        res.status(500).send({ message: "Failed to update banner", error });
    }
};





module.exports = {
    uploadBanner,
    getAllBanner,
    deleteBanner,
    updateBannerStatus,
    editBanner
}
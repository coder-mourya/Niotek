const Product = require("../models/product");
const upload = require("../config/s3");

// upload product

const uploadProduct = async (req, res) => {
    const { name, description, category, subcategory, isActive } = req.body;

    // Check required fields
    if(!name){
        return res.status(400).send({ message: 'Name is required' });
    }

    if(!description){
        return res.status(400).send({ message: 'Description is required' });
    }

    if(!category){
        return res.status(400).send({ message: 'Category is required' });
    }

    // Check if files are uploaded
    // if (!req.files || !req.files.image || !req.files.file) {
    //     return res.status(400).send({ message: 'Both image and file are required: image, file.' });
    // }

    if(!req.files.image){
        return res.status(400).send({ message: 'Image is required' });
    }

    if(!req.files.file){
        return res.status(400).send({ message: 'File is required' });
    }

    try {
        // Get URLs from S3
        const imageUrl = req.files.image ? req.files.image[0].location : null;
        const fileUrl = req.files.file ? req.files.file[0].location : null;

        // Create new product document
        const product = new Product({
            name,
            description,
            category,
            subcategory,
            isActive: isActive || true, // Default to true if not provided
            file: fileUrl,
            image: imageUrl
        });

        // Save product to database
        await product.save();

        // Respond with success
        res.status(200).send({
            message: 'Product uploaded successfully',
            product
        });
    } catch (error) {
        // Handle any errors during save operation
        res.status(500).send({ message: 'Failed to save product', error: error.message });
    }
};


// get all product
const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve product', error });
    }
}


//  delete product
const deleteProduct = async (req, res) => {
  const {id} = req.params;

  try {
     const product = await Product.findByIdAndDelete(id);
     
     if(!product){
        return res.status(404).send({ message: 'product not found' });

     }

     res.status(200).send({
        message: 'product deleted successfully',
        product
     })

  } catch (error) {
    res.status(500).send({ message: 'Failed to delete product', error });
  }
}


// update product status 

const updateProductStatus = async (req, res) => {
    const { id } = req.params;
    const { isActive } = req.body;

    if (typeof isActive !== "boolean") {
        return res.status(400).send({ message: 'isActive field must be a boolean.' });
    }

    try {
        const product = await Product.findByIdAndUpdate(
            id,
            { isActive },
            { new: true }
        )

        if(!product){
            return res.status(404).send({ message: 'product not found' });
        }

        res.status(200).send({
            message: 'product status updated successfully',
            product
        })
    } catch (error) {
        res.status(500).send({ message: 'Failed to update product status', error });
    }
}



module.exports = {
    uploadProduct,
    getAllProduct,
    deleteProduct,
    updateProductStatus,
}
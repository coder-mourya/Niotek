const Category = require("../models/category");
const mongoose = require("mongoose");

// create category
const createCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).send({ message: "Name is required" });
    }

    try {
        const category = new Category({ name });
        await category.save();
        res.status(200).send({ message: "Category created successfully", category });
    } catch (error) {
        res.status(500).send({ message: "Failed to create category", error });
    }
}

// get all categories
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send({ message: "Failed to retrieve categories", error });
    }
}

// update category status
const updateCategoryStatus = async (req, res) => {
    const { id } = req.params;
    const { isActive } = req.body;

    try {
        const category = await Category.findByIdAndUpdate(id, { isActive }, { new: true });
        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }
        res.status(200).send({ message: "Category status updated successfully", category });
    } catch (error) {
        res.status(500).send({ message: "Failed to update category status", error });
    }
}

// delete category
const deleteCategory = async (req, res) => {
    
    
    const { id } = req.params;
  
    // Check if id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: 'Invalid page ID format.' });
    }
  
    try {
      const page = await Category.findByIdAndDelete(id);
  
      if (!page) {
        return res.status(404).send({ message: 'Page not found' });
      }
  
      res.status(200).send({
        message: 'category deleted successfully',
        page
      });
    } catch (error) {
      res.status(500).send({ message: 'Failed to delete page', error });
    }
  };

//   edit category

const editCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if(!name){
        return res.status(400).send({ message: "Name is required" });
    }

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ message : "Invalid category ID format."})
    }

    try {
        const updateCategory = await Category.findByIdAndUpdate(
            id,
            {name},
            {new : true, omitUndefined : true}
        
        )

        if(!updateCategory){
            return res.status(400).send({ message : "Category not found."})
        }

        res.status(200).send({
            message: 'category update successfully',
            category : updateCategory
        })

    } catch (error) {
        res.status(500).send({ message: 'Failed to update category', error });
    }
}

module.exports = {
    createCategory,
    getAllCategories,
    updateCategoryStatus,
    deleteCategory,
    editCategory
};
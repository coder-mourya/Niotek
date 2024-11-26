// controllers/textController.js
const mongoose  = require("mongoose");
const Enquiry = require("../models/enquiry");
const Pages = require("../models/pages");
const sanitizeHtml = require('sanitize-html');

// Controller for handling enquiry uploads
const uploadEnquiry = async (req, res) => {
  const { name, email, message, companyName, mobile } = req.body;

  // Validate input
  if(!name){
    return res.status(400).send({ message: 'Name is required' });
  }

  if(!email){
    return res.status(400).send({ message: 'Email is required' });
  }

  if(!message){
    return res.status(400).send({ message: 'Message is required' });
  }

  if(!companyName){
    return res.status(400).send({ message: 'Company name is required' });
  }

  if(!mobile){
    return res.status(400).send({ message: 'Mobile number is required' });
  }

  try {
    // Create a new enquiry document
    const enquiryEntry = new Enquiry({
      name,
      email,
      message,
      companyName,
      mobile
    });

    await enquiryEntry.save();

    res.status(200).send({
      message: 'Enquiry uploaded successfully',
      enquiryEntry
    });
  } catch (error) {
    res.status(500).send({ message: 'Failed to save enquiry', error });
  }
};

// get all enquiries
const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find()
    res.status(200).send(enquiries)
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve enquiries', error });
  }
}


// create page 
const creatPage = async (req, res) => {
  const { title, discription } = req.body;
  // validate inpute 
  if (!title || !discription) {
    return res.status(400).send({ message: 'All fields are required: title, discription.' });
  }


   // Sanitize description to allow only safe HTML
   const sanitizedDescription = sanitizeHtml(discription, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'span', 'b', 'i', 'u', 'strong', 'em', 'p']),
    allowedAttributes: {
      a: ['href', 'target'],
      img: ['src', 'alt'],
      '*': ['style'], // Allow styles on any tag
    },
  });
  

  try {

    const page = new Pages({
      title,
      discription : sanitizedDescription
    })

    await page.save();

    res.status(200).send({
      message: 'Page uploaded successfully',
      page
    })

  } catch (error) {
    res.status(500).send({ message: 'Failed to save page', error });
  }
}

// get all pages 

const getPages = async (req, res) => {
  try {
    const pages = await Pages.find();
    res.status(200).send(pages);
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve pages', error });
  }
}

// update page status 

const updatePageStatus = async (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body;

  // console.log(req.body);

  if (typeof isActive !== "boolean") {
    return res.status(400).send({ message: 'isActive field must be a boolean.' });
  }


  try {
    const page = await Pages.findByIdAndUpdate(
      id,
      { isActive },
      { new: true }
    )

    if (!page) {
      return res.status(404).send({ message: 'Page not found' });
    }

    res.status(200).send({
      message: 'Page status updated successfully',
      page
    });


  } catch (error) {
    res.status(500).send({ message: 'Failed to update page status', error });
  }

}



// delete page 

const deletePage = async (req, res) => {
  console.log("delete page");
  
  const { id } = req.params;

  // Check if id is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid page ID format.' });
  }

  try {
    const page = await Pages.findByIdAndDelete(id);

    if (!page) {
      return res.status(404).send({ message: 'Page not found' });
    }

    res.status(200).send({
      message: 'Page deleted successfully',
      page
    });
  } catch (error) {
    res.status(500).send({ message: 'Failed to delete page', error });
  }
};


// edit page 

const editPage = async (req, res) => {
  const {id} = req.params;
  const {title , discription} = req.body;

  // validation 
  if (!title && !discription) {
    return res.status(400).send({ message: 'At least one field (title or description) is required for update.' });
  }

  // chek id is valied 
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).send({ message : "Invalid page ID format."})
  }

  try {
    const updatePage = await Pages.findByIdAndUpdate(
      id,
      {title, discription},
      {new : true, omitUndefined : true}
    );

    if(!updatePage){
      return res.status(400).send({ message : "Page not found."})

    }

    res.status(200).send({
      message: 'pages update successfully',
      page : updatePage
    })
  } catch (error) {
    res.status(500).send({ message: 'Failed to update page', error });
  }
}


// Export the controller functions
module.exports = {
  uploadEnquiry,
  getEnquiries,
  creatPage,
  getPages,
  updatePageStatus,
  deletePage,
  editPage,
};

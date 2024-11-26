// routes/ all routes
const express = require('express');
const router = express.Router();
const textController = require('../controllers/textController');
const bannerController = require('../controllers/bannerController');
const upload = require('../config/s3');
const productController = require('../controllers/productController');
const categoryController = require('../controllers/categoryController');
const {sendEmail} = require('../controllers/mailController');


// Route to handle enquiry uploads
router.post('/enquiry', textController.uploadEnquiry);
router.get('/enquiry', textController.getEnquiries)
// route for pages
router.post('/pages', textController.creatPage);
router.get('/pages', textController.getPages)
router.patch('/pages/status/:id', textController.updatePageStatus);
router.delete('/pages/:id', textController.deletePage);
router.patch('/pages/:id', textController.editPage);

// banner routes 
// router.post('/banner', upload.fields([{ name: 'image', maxCount: 1 }]), bannerController.uploadBanner);
router.post('/banner', upload, bannerController.uploadBanner);
router.get('/banner', bannerController.getAllBanner);
router.delete('/banner/:id', bannerController.deleteBanner);
router.patch('/banner/status/:id', bannerController.updateBannerStatus);
router.patch('/banner/:id', upload, bannerController.editBanner);

// product routes
// router.post('/product', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'file', maxCount: 1 }]), productController.uploadProduct);
router.post('/product', upload, productController.uploadProduct);
router.get('/product', productController.getAllProduct);
router.delete('/product/:id', productController.deleteProduct);
router.patch('/product/status/:id', productController.updateProductStatus);

// category routes
router.post('/category', categoryController.createCategory);
router.get('/category', categoryController.getAllCategories);
router.delete('/category/:id', categoryController.deleteCategory);
router.patch('/category/status/:id', categoryController.updateCategoryStatus);
router.patch('/category/:id', categoryController.editCategory);

// mail sender 

router.post('/send-email', async (req, res) => {
    const { fromEmail, toEmails, subject, message } = req.body;

    // Validate request body
    if (!fromEmail || !toEmails || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const result = await sendEmail(fromEmail, toEmails, subject, message);
        if (result.success) {
            return res.status(200).json({ message: "Email sent successfully", messageId: result.messageId });
        } else {
            return res.status(500).json({ error: result.error });
        }
    } catch (error) {
        console.error("Error in email route:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;

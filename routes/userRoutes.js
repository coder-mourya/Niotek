const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.RegisterNewUser);
router.post("/login", userController.userLogin);
router.post("/changePassword", userController.changePassword);

module.exports = router;
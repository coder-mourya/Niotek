const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
const RegisterNewUser = async (req, res) =>{

    console.log("request get for new Register ");
    try {
        const {name, email, password} = req.body;

        // check if user already exits 
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({message : "User already registered with this email"})
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name,
            email,
            password:hashedPassword
        })

        // save user 
        await newUser.save();

        const token = jwt.sign({email : newUser.email, name : newUser.name},
            process.env.JWT_SECRET,
            {expiresIn : '1h'}
            );

            res.status(201).json({message: "new user register sucessFully" , token , user : newUser})


    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


// user login  

const userLogin = async (req, res) =>{

    console.log("login request");

    try {
        const {email , password}  = req.body;
        
        const loginUser = await User.findOne({email})

        if(!loginUser){
            return res.status(401).json({error : "User not found"})
        }

        const matchPassword = await bcrypt.compare(password, loginUser.password)

        if(!matchPassword){
            return res.status(401).json({error : "Wrong password "})
        }


        const token = jwt.sign({email: loginUser.email },
            
            process.env.JWT_SECRET,
            {expiresIn : '1h'}
            )

            // res.json({token})

            console.log("user loggedIn successFully");
            res.status(200).json({message: "user loggedIn successFully" , token, user : loginUser})
            
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


const changePassword = async (req, res) => {
    console.log("Change password request");

    try {
        const { currentPassword, newPassword } = req.body;

        // Validate input
        if (!currentPassword || !newPassword) {
            return res.status(400).json({ error: "Current and new passwords are required" });
        }

        // Verify user from token (Assumes token contains user email)
        const token = req.headers.authorization?.split(" ")[1]; // Assuming Bearer token
        if (!token) {
            return res.status(401).json({ error: "Authorization token missing" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if the current password is correct
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Current password is incorrect" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user's password in the database
        user.password = hashedPassword;
        await user.save();

        console.log("Password changed successfully");
        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        console.log(error);
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ error: "Invalid token" });
        }
        res.status(500).json({ error: "Internal Server Error" });
    }
};



module.exports = {
    RegisterNewUser,
    userLogin,
    changePassword
}
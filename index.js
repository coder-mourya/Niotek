require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const connectToDB = require('./config/mongodb');
const userRoutes = require("./routes/userRoutes")
const textRoutes = require("./routes/allRoutes")
const cors = require("cors")


const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json());


// for Allow frontend 
app.use(cors({
    origin: '*',
    credentials: true
  }));
  

app.use(express.json());

app.get('/', (req, res) =>{ 
    res.send("Hello world")
})


// routes
app.use('/api', textRoutes)
app.use('/user', userRoutes )



const start = async() =>{

    try {
        await connectToDB(process.env.MONGODB_URL)
        app.listen(PORT , () =>{
            console.log(`server running on ${PORT}`);
        })
    } catch (error) {
        console.log((error));
    }

}

start()
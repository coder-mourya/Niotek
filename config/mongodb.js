const mongoose = require("mongoose")

const connectToDB = async (uri) =>{
    try {
        await mongoose.connect(uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify : false,
            })

            console.log("connect to mongo db");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.stack || error);
        process.exit(1);
    }
}

module.exports = connectToDB
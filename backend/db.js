const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://harshvardhanjha35363:12345@cluster0.qyoc0am.mongodb.net/MERN?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Database is connected");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

module.exports = mongoDB;

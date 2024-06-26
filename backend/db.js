const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://harshvardhanjha35363:12345@cluster0.qyoc0am.mongodb.net/MERN?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);

        console.log("Database is connected");

        const collection = mongoose.connection.db.collection("food_items");
        const data = await collection.find({}).toArray();
        if(data.length >0){
            global.food_items = data;
            console.log("Data from 'food_item' collection:")
        }
        else{
            console.log("No data found");
            global.food_items=[];
        }
        
        const category = mongoose.connection.db.collection("foodCategory");
        const catdata = await category.find({}).toArray();
        if(catdata.length >0){
            global.foodCategory = catdata;
            console.log("Data from 'foodCategory' collection:")
        }
        else{
            console.log("No data found");
            global.foodCategory=[];
        }
        

    } catch (error) {
        console.error("Error connecting to database:", error);
        global.food_items=[];
    }
};

module.exports = mongoDB;


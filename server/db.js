const mongoose = require("mongoose");
//require("dotenv").config();

const mongo_url = "mongodb+srv://nehasangral024:Neha%402002@cluster0.9bp3ems.mongodb.net/foodapp";           //add your mongodb cluster connection string here 
//console.log(mongo_url); 

  const mongodb = async () => {
    try {  
        await mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected successfully...");

        const fetch_food_items = mongoose.connection.db.collection("sample");
        const items_data = await fetch_food_items.find({}).toArray(); 
        global.foodData = items_data;
        // console.log("global food data--->",global.foodData); 

        const fetch_food_category = mongoose.connection.db.collection("food_category");
        const category_data = await fetch_food_category.find({}).toArray();
        global.foodCategory = category_data;
        // console.log(global.foodCategory);

    } catch (error) {
        console.error("Error connecting to the database...", error);
    } 
}

module.exports = mongodb;
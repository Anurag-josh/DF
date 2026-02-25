const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Banner = require('./models/Banner');

console.log("Loading .env from:", path.resolve(__dirname, '.env'));
const result = dotenv.config();

if (result.error) {
    console.log("Error loading .env:", result.error);
}

console.log("MONGO_URI from env:", process.env.MONGO_URI ? process.env.MONGO_URI.replace(/\/\/([^:]+):([^@]+)@/, "//***:***@") : "UNDEFINED");

if (!process.env.MONGO_URI) {
    console.error("CRITICAL: MONGO_URI is not defined!");
    process.exit(1);
}

mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Connected to DB successfully.");
        const banners = await Banner.find({});
        console.log(`Found ${banners.length} banners in THIS database.`);
        banners.forEach((b, i) => {
            console.log(`Banner ${i}: ID=${b._id}, Image=${b.image}`);
        });
        process.exit();
    })
    .catch((err) => {
        console.error("DB Connection Error:", err.message);
        process.exit(1);
    });

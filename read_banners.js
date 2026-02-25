const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Banner = require('./models/Banner');

dotenv.config();

console.log("Connecting to:", process.env.MONGO_URI.replace(/\/\/([^:]+):([^@]+)@/, "//***:***@"));

mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Connected to DB");
        const banners = await Banner.find({});
        console.log("Banners found:", banners.length);
        banners.forEach((b, i) => {
            console.log(`Banner ${i + 1}:`);
            console.log(`  ID: ${b._id}`);
            console.log(`  Image URL: ${b.image}`);
            console.log(`  UpdatedAt: ${b.updatedAt}`);
        });
        process.exit();
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

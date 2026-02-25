const mongoose = require("mongoose");

const Banner = require("./models/Banner"); // path to your model

mongoose.connect("mongodb+srv://simonkampad_db_user:WULKSTUAUKv0Rt56@cluster0.nnpsvlu.mongodb.net/DolphinPharmacy?appName=Cluster0")
  .then(async () => {
    console.log("MongoDB Connected\n");

    const banners = await Banner.find({});

    if (banners.length === 0) {
      console.log("❌ No banners found");
    } else {
      console.log(`✅ Found ${banners.length} banners\n`);

      banners.forEach((b, i) => {
        console.log(`Banner ${i + 1}`);
        console.log("ID:", b._id);
        console.log("Title:", b.title);
        console.log("Image Path:", b.image);
        console.log("URL:", b.url);
        console.log("Active:", b.isActive);
        console.log("-----------------------");
      });
    }

    process.exit();
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
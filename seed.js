const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding...');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

connectDB();

const sampleProducts = [
  // 🧴 Skin Care
  {
    name: 'Nivea Soft Cream',
    category: 'Skin Care',
    subCategory: 'Moisturizer',
    price: 180,
    originalPrice: 220,
    description: 'Light moisturizing cream for daily use.',
    brand: 'Nivea',
    image: 'https://i.pinimg.com/736x/cb/68/af/cb68af3fb9eb39e7b969d894450d576e.jpg',
    countInStock: 60
  },
  {
    name: 'Cetaphil Gentle Cleanser',
    category: 'Skin Care',
    subCategory: 'Face Wash',
    price: 350,
    originalPrice: 399,
    description: 'Gentle cleanser for sensitive skin.',
    brand: 'Cetaphil',
    image: 'https://i.pinimg.com/736x/e9/5e/62/e95e626740b3fa4b34743d05f7c968cb.jpg',
    countInStock: 45
  },
  {
    name: 'Lakme Sunscreen SPF 50',
    category: 'Skin Care',
    subCategory: 'Sunscreen',
    price: 299,
    originalPrice: 350,
    description: 'Broad spectrum sun protection.',
    brand: 'Lakme',
    image: 'https://i.pinimg.com/1200x/c1/ad/4e/c1ad4ef96239377f8c9ca63173d01236.jpg',
    countInStock: 70
  },

  // 💊 Vitamins & Minerals (Non-Prescription)
  {
    name: 'Shelcal 500',
    category: 'Vitamins & Minerals',
    subCategory: 'Calcium',
    price: 120,
    originalPrice: 150,
    description: 'Calcium supplement for bones.',
    brand: 'Torrent',
    image: 'https://i.pinimg.com/736x/b1/fd/41/b1fd41bafb455a418cc9a57edd86f192.jpg',
    countInStock: 100
  },
  {
    name: 'Zincovit Tablets',
    category: 'Vitamins & Minerals',
    subCategory: 'Multivitamin',
    price: 95,
    originalPrice: 120,
    description: 'Multivitamin and mineral supplement.',
    brand: 'Apex',
    image: 'https://i.pinimg.com/736x/1b/2e/62/1b2e6231bee94b02f1f642ea1d6812d7.jpg',
    countInStock: 120
  },
  {
    name: 'Evion 400',
    category: 'Vitamins & Minerals',
    subCategory: 'Vitamin E',
    price: 60,
    originalPrice: 75,
    description: 'Vitamin E capsules for skin & hair.',
    brand: 'Merck',
    image: 'https://i.pinimg.com/736x/5d/5e/2e/5d5e2eaef67970df89974b2f020527de.jpg',
    countInStock: 90
  },

  // 🥤 Health Food & Drinks
  {
    name: 'Horlicks Health Drink',
    category: 'Health Food & Drinks',
    subCategory: 'Nutrition Drink',
    price: 320,
    originalPrice: 350,
    description: 'Nutrition drink for daily energy.',
    brand: 'Horlicks',
    image: 'https://i.pinimg.com/1200x/fe/ce/e9/fecee9b55874b7add4f237d61a408111.jpg',
    countInStock: 50
  },
  {
    name: 'Ensure Nutrition Powder',
    category: 'Health Food & Drinks',
    subCategory: 'Protein',
    price: 650,
    originalPrice: 720,
    description: 'Balanced nutrition supplement.',
    brand: 'Abbott',
    image: 'https://i.pinimg.com/1200x/12/b5/fc/12b5fc9f4c7876cd090504795b52f807.jpg',
    countInStock: 35
  },
  {
    name: 'Protinex Original',
    category: 'Health Food & Drinks',
    subCategory: 'Protein',
    price: 520,
    originalPrice: 600,
    description: 'Protein-rich nutritional drink.',
    brand: 'Protinex',
    image: 'https://i.pinimg.com/736x/27/b8/bc/27b8bc7b3fa5e23abb44ae840f8ce9bb.jpg',
    countInStock: 40
  },

  // 👶 Baby Care
  {
    name: 'Johnson Baby Oil',
    category: 'Baby Care',
    subCategory: 'Baby Oil',
    price: 210,
    originalPrice: 250,
    description: 'Gentle baby massage oil.',
    brand: 'Johnson & Johnson',
    image: 'https://i.pinimg.com/736x/44/6c/94/446c94af4e075d97c886b67626d0d287.jpg',
    countInStock: 60
  },
  {
    name: 'Sebamed Baby Lotion',
    category: 'Baby Care',
    subCategory: 'Baby Lotion',
    price: 450,
    originalPrice: 520,
    description: 'Moisturizing lotion for babies.',
    brand: 'Sebamed',
    image: 'https://i.pinimg.com/736x/43/c9/18/43c9187d92df8ce8c15d01faf7739612.jpg',
    countInStock: 30
  },
  {
    name: 'Himalaya Baby Soap',
    category: 'Baby Care',
    subCategory: 'Baby Soap',
    price: 90,
    originalPrice: 110,
    description: 'Herbal soap for babies.',
    brand: 'Himalaya',
    image: 'https://i.pinimg.com/1200x/19/39/00/193900f5aa448dc88ceaa1a74d747e58.jpg',
    countInStock: 80
  },

  // 💊 Pain Relief
  {
    name: 'Crocin 650',
    category: 'Pain Relief',
    subCategory: 'Fever',
    price: 30,
    originalPrice: 35,
    description: 'Paracetamol for fever & pain.',
    brand: 'GSK',
    image: 'https://i.pinimg.com/736x/9c/6f/0f/9c6f0ff4b77065a82e78a2b487cca596.jpg',
    countInStock: 200
  },
  {
    name: 'Voveran Gel',
    category: 'Pain Relief',
    subCategory: 'Muscle Pain',
    price: 140,
    originalPrice: 170,
    description: 'Pain relief gel for joints.',
    brand: 'Novartis',
    image: 'https://i.pinimg.com/736x/3d/ce/8c/3dce8c34ad78a6d82aaeba8389a72150.jpg',
    countInStock: 75
  },
  {
    name: 'Moov Spray',
    category: 'Pain Relief',
    subCategory: 'Spray',
    price: 180,
    originalPrice: 210,
    description: 'Instant pain relief spray.',
    brand: 'Moov',
    image: 'https://i.pinimg.com/736x/4c/9d/db/4c9ddba3f74e9dfad8c21e762543b22a.jpg',
    countInStock: 65
  },

  // ♿ Wheel Chair
  {
    name: 'Foldable Wheelchair Standard',
    category: 'Wheel Chair',
    subCategory: 'Manual',
    price: 6500,
    originalPrice: 7500,
    description: 'Lightweight foldable wheelchair.',
    brand: 'Karma',
    image: 'https://i.pinimg.com/736x/88/34/69/8834690e3764726873c8dd1034a026fe.jpg',
    countInStock: 10
  },
  {
    name: 'Steel Wheelchair',
    category: 'Wheel Chair',
    subCategory: 'Manual',
    price: 7200,
    originalPrice: 8200,
    description: 'Durable steel wheelchair.',
    brand: 'Arcatron',
    image: 'https://i.pinimg.com/1200x/05/bf/d9/05bfd9f662f6cc2fc2b8f23cfd8bc081.jpg',
    countInStock: 8
  },
  {
    name: 'Reclining Wheelchair',
    category: 'Wheel Chair',
    subCategory: 'Recliner',
    price: 14500,
    originalPrice: 16500,
    description: 'Reclining wheelchair with headrest.',
    brand: 'KosmoCare',
    image: 'https://i.pinimg.com/736x/c5/d6/24/c5d624573afff30e43c0c22d1f699286.jpg',
    countInStock: 5
  }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Run command
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false, // Optional, for alt text or admin reference
    },
    url: {
        type: String,
        required: false, // Optional link when clicked
    },
    type: {
        type: String,
        enum: ['hero', 'promo-small', 'promo-large', 'footer'],
        default: 'hero',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    order: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Banner', bannerSchema);
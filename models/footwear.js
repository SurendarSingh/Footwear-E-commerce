const mongoose = require("mongoose");

const footwearSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    brand: {
        type: String,
        enum: ["Bata", "Walkaroo"],
        required: [true, "Please enter your brand"]
    },
    price: {
        type: Number,
        required: [true, "Please enter your price"]
    },
    category: {
        type: String,
        enum: ["Boys", "Girls", "Gents", "Ladies", "Shoes"],
        required: [true, "Please enter your category"]
    },
    imageName: {
        type: String,
        required: [true, "Please enter your image path"]
    },
    size: {
        1: Number,
        2: Number,
        3: Number,
        4: Number,
        5: Number,
        6: Number,
        7: Number,
        8: Number,
        9: Number,
        10: Number,
        11: Number,
        12: Number,
        13: Number
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

// update the updatedAt field
footwearSchema.pre("save", function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("Footwear", footwearSchema);
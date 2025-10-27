const mongoose = require('mongoose');

// Define schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Clothing', 'Food', 'Other']
  }
});

// Create model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

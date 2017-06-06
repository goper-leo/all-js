import mongoose, { Schema } from 'mongoose';

// Define home schema
var homeSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  description: String,
  lat: String,
  long: String,
  price: String,
  reviews: String,
  rating: String,
  images: Array
});

// Export Mongoose model
export default mongoose.model('home', homeSchema);

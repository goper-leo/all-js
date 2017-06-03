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
  reviews: String,
  rating: String
});

// Export Mongoose model
export default mongoose.model('home', homeSchema);

import mongoose from "mongoose";

// Category Schema Table
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  imgurl: { type: String, required: true },
});

export const Categories = mongoose.model("Categories",CategorySchema);

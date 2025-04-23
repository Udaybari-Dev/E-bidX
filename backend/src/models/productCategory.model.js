import mongoose from "mongoose";

const productCategorySchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String }, 
  

}, {
  timestamps: true,
});

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

export default ProductCategory;

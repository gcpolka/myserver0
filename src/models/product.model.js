const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  sizeshoe : {type : String, required: true},
  imageShoe : {type : String, required:true}
 
}, { timestamps: true });

module.exports = mongoose.model("product", ProductSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: { type: String, required: true },
  emailc: { type: String, required: true },
  messagec: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("contact", ContactSchema);
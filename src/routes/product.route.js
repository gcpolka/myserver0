const express = require('express');
const app = express.Router();
const controller = require('../controllers/product.controller')

app.get("/", controller.getProduct);
app.get("/:id",controller.getProductById);
app.post("/",controller.createProduct);
app.put("/:id",controller.updateProduct);
app.patch("/:id",controller.addReview);
app.delete("/:id",controller.deleteProduct);


app.get("/category/:category", controller.getProducteByCategory);
app.get("/category/LIFESTYLE", controller.getProducteByCategory);
app.get("/category/RUNNER", controller.getProducteByCategory);
app.get("/category/GYM", controller.getProducteByCategory);


app.get ("/name/:name", controller.getProductByName);
module.exports = app;
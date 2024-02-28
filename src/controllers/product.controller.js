const Product = require("../models/product.model");
exports.getProduct = (req, res) => {
  Product.find().then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};
exports.getProductById = (req, res) => {
  Product.findById(req.params.id).then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};

  exports.createProduct = async (req, res) => {
    //เพิ่ม foodmenu
    try {
      let product = new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        sizeshoe: req.body.sizeshoe,
        imageShoe: req.body.imageShoe
        // ingredients: req.body.ingredients
      });
      let createProduct = await product.save();
      res.status(200).json({
        msg: "Add a product complete.",
        data: createProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: error,
      });
    }
  
  };

  exports.updateProduct = (req, res) => {
    let product = {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      ingredients: req.body.ingredients,
    };
    Product.findByIdAndUpdate(req.params.id, product)
      .then((result) => {
      // findById อีกครั้งเพื่อเอา data ใหม่
      Product.findById(req.params.id).then((result) => {
        res.status(200).json({
          msg: "OK",
          data: result,
        });
      });
    });
  };
  
  exports.addReview = (req, res) => {
    let reviewData = {
      $push: {
        reviews: {
          star: req.body.star,
          message: req.body.message,
        },
      },
    };
    Product.findByIdAndUpdate(req.params.id, reviewData).then((result) => {
      // findById อีกครั้งเพื่อเอา data ใหม่
      Product.findById(req.params.id).then((result) => {
        res.status(200).json({
          msg: "OK",
          data: result,
        });
      });
    });
  };
  
  exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json({
          msg: `Product id ${req.params.id} is deleted.`,
        });
      });
    };
    
  exports.getProductByName = (req, res) => {
    Product.find({ 
      name: new RegExp(req.params.name)
    }).then((result) => {
      res.status(200).json({
        msg: "Search OK",
        data: result,
      });
    });
  };

  exports.getProducteByCategory = (req, res) => {
    Product.find({ 
      category: new RegExp(req.params.category)
    }).then((result) => {
      res.status(200).json({
        msg: "Search OK",
        data: result,
      });
    });
  };

  
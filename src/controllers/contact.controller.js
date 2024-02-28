const Contact = require("../models/contact.model");


exports.getContact = (req, res) => {
    Contact.find().then((result) => {
      res.status(200).json({
        msg: "Search OK",
        data: result,
      });
    });
  };

exports.createContact = async (req, res) => {
    //เพิ่ม foodmenu
    try {
      let contact = new Contact({
        name: req.body.name,
        emailc: req.body.emailc,
        messagec: req.body.messagec,
       
      });
      let createContact = await contact.save();
      res.status(200).json({
        msg: "Add a Message complete.",
        data: createContact,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: error,
      });
    }
  
  };
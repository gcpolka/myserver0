const express = require('express');
const app = express.Router();
const controller = require('../controllers/contact.controller')

app.get("/", controller.getContact);
app.post("/",controller.createContact);

module.exports = app;
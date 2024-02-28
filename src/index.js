require('dotenv').config({ path: './config.env'});
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./db.js")(app);

const productRoute = require('./routes/product.route');
app.use("/product", productRoute);

const contactRoute = require('./routes/contact.route');
app.use("/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/about", (req, res) => {
  res.send("About us");
});

app.get("/contact", (req, res) => {
    res.send("Contact");
  });

app.get("/people", (req, res) => {
    res.send("People");
  });

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});

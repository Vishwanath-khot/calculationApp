const mongoose = require("mongoose");
const calculators = require("./routes/calculators");
const express = require("express");
const app = express();
app.use(express.static("public"));
var path = require('path')
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')))

mongoose
  .connect("mongodb://localhost:27017/calculator", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

// Body-parser middleware
app.use(express.json({ extended: false }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", calculators);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

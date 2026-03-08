const express = require("express");
const mongoose = require("mongoose");

const policyRoutes = require("./routes/policyRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

mongoose.connect("mongodb+srv://admin:admin123@cluster0.mongodb.net/insuranceDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/", policyRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
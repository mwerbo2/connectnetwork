const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

//connect database
connectDB();

app.get("/", (req, res) => res.send("api running"));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

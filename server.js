const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = 5000;

//connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));

// app.get("/", (req, res) => res.send("api running"));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

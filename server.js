const express = require("express");
const mongoose = require("mongoose");
const app = express();
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// db config
const db = require("./config/keys").mongoURI;
//connect Mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("db connected"))
  .catch(error => {
    console.log(error);
  });
app.get("/", (req, res) => {
  res.send("Hello Mahmoud");
});
//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`sever is running on port ${port}`);
});

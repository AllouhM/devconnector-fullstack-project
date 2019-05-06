const express = require("express");
const connectDB = require("./config/db");
const auth = require("./routes/api/auth");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// init body parser middleware this is used instead of body-parser
app.use(express.json({ extended: false }));
// db config
// const db = require("./config/keys").mongoURI;// old ver

//connect Mongodb
connectDB();

//use routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`sever is running on port ${port}`);
});

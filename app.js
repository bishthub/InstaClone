const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const { MONGOURI } = require("./key");

require("./models/user");
// const customMidleware = (req, res, next) => {
//   console.log("midleware started");
//   next();
// };
app.use(express.json());
app.use(require("./routes/auth"));

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongoose");
});
mongoose.connection.on("error", (err) => {
  console.log("error in connection", err);
});

mongoose.model("User");
// app.get("/", (req, res) => {
//   console.log("initialized home page");
//   res.send("Hello World");
// });
// app.get("/about", customMidleware, (req, res) => {
//   console.log("initialized about page");
//   res.send("Hello ji");
// });

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});

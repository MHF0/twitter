const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./database/db");

const userRoute = require("./routes/userRoute");
const loginRoute = require("./routes/loginRoute");
const tweetRoute = require("./routes/tweetRoute");
const commentRoute = require("./routes/commentRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", userRoute);
app.use("/api", loginRoute);
app.use("/api", tweetRoute);
app.use("/api", commentRoute);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

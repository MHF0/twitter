const express = require("express");
require("dotenv").config();
require("./database/db");

const userRoute = require("./routes/userRoute");
const loginRoute = require("./routes/loginRoute");


const app = express();
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", loginRoute);


const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

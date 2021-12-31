const express = require("express");
require("dotenv").config();
require("./database/db")

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

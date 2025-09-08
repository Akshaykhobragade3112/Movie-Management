const express = require("express");
const cors = require("cors");
const movieRoutes = require("./routes/movieroutes");
const swaggerDocs = require("./docs/swagger");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/movies", movieRoutes);

swaggerDocs(app);

module.exports = app;

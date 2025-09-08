require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const movieRoutes = require("./routes/movieroutes");
const errorHandler = require("./middleware/errorHandler");
const swaggerDocs = require("./docs/swagger");

const app = express();
app.use(express.json());

app.use("/movies", movieRoutes);

swaggerDocs(app);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
  });
});

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3001;
const uri =
  "mongodb+srv://admin:admin123@cluster0.90nma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const gamesRoutes = require("./routes/gamesRoutes");
const genresRoutes = require("./routes/genresRoutes");
const consolesRoutes = require("./routes/consolesRoutes");

app.use(express.json());

//Databas connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/games", gamesRoutes);
app.use("/api/v1/genres", genresRoutes);
app.use("/api/v1/consoles", consolesRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

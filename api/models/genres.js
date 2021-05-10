const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: { type: String },
  games: [{ type: Schema.Types.ObjectId, ref: "Game" }],
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;

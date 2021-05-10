const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: { type: String },
  console: { type: Schema.Types.ObjectId, ref: "Console", default: null },
  genre: { type: Schema.Types.ObjectId, ref: "Genre", default: null },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;

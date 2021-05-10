const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consoleSchema = new Schema({
  name: { type: String },
  imgUrl: {type: String },
  games: [{ type: Schema.Types.ObjectId, ref: "Game" }],
});

const Console = mongoose.model("Console", consoleSchema);

module.exports = Console;

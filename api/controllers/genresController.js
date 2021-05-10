const Game = require("../models/games");
const Genre = require("../models/genres");
const fetch = require("node-fetch");

const createGenre = (req, res) => {
  Genre.create(
    {
      name: req.body.name,
    },
    (err, result) => {
      if (err) {
        console.log(err);
        res.json({ error: error });
      }
      console.log("new genre", result);
      res.send("ok");
    }
  );
};

const addGenreToGame = async (req, res) => {
  let game;
  let genre;
  try {
    game = await Game.findById(req.body.gameId);
    genre = await Genre.findById(req.body.genreId);
  } catch (err) {
    res.send("Something went wrong!");
    console.log(err);
    return;
  }

  console.log("this is gameId: ", game._id);
  game.genre = genre._id;

  genre.games.push(game._id);

  // if(game.lenth > 1) {
  //     genre.games = [...genre.games, ...game._id];
  // } else {
  //     genre.games.push(game._id);
  // }

  // genre.games.push(game._id);
  // genreId = genre._id

  // console.log("This is gameId: ", genre.game);
  // console.log("This is genreId: ", genreId);

  // game.genre = genreId;

  await game.save();
  await genre.save();

  res.json({ game, genre });
};

module.exports = {
  addGenreToGame,
  createGenre,
};

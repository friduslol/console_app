const Game = require("../models/games");
const fetch = require("node-fetch");

const createGame = async (req, res) => {
  Game.create(
    {
      name: req.body.name,
    },
    (err, result) => {
      if (err) {
        console.log(err);
        res.json({ error: error });
      }
      console.log("new game", result);
      res.send("ok");
    }
  );
};

const getGameById = async (req, res) => {
  Game.findById(req.params.gameId).exec((err, game) => {
    if (err) {
      res.json(err);
      return;
    }
    if (!game) {
      res.json({
        err: `game with id ${req.params.gameId} does not exist`,
      });
      return;
    }
    res.json(game);
  });
};

const getAllGames = async (req, res) => {
  if (Object.keys(req.query).length === 0) {
    let games = await Game.find().exec();
    res.json(games);
    console.log(games);
    return;
  }
};

module.exports = {
  getGameById,
  getAllGames,
  createGame,
};

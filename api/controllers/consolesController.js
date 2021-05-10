const Game = require("../models/games");
const Console = require("../models/consoles");
const fetch = require("node-fetch");

const createConsole = (req, res) => {
  Console.create(
    {
      name: req.body.name,
    },
    (err, result) => {
      if (err) {
        console.log(err);
        res.json({ error: error });
      }
      console.log("new console", result);
      res.send("ok");
    }
  );
};

const getConsoleById = async (req, res) => {
  Console.findById(req.params.consoleId).exec((err, console) => {
    if (err) {
      res.json(err);
      return;
    }
    if (!console) {
      res.json({
        err: `console with id ${req.params.consoleId} does not exist`,
      });
      return;
    }
    res.json(console);
  });
};

const addGameToConsole = async (req, res) => {
  let game;
  let console;
  try {
    game = await Game.findById(req.body.gameId);
    console = await Console.findById(req.body.consoleId);
  } catch (err) {
    res.send("Something went wrong!");
    console.log(err);
    return;
  }
  game.console = console._id;
  console.games.push(game._id);

  await game.save();
  await console.save();

  res.json({ game, console });
};

const getAllConsoles = async (req, res) => {
  if (Object.keys(req.query).length === 0) {
    let consoles = await Console.find().exec();
    res.json(consoles);
    return;
  }
};

module.exports = {
  getConsoleById,
  createConsole,
  addGameToConsole,
  getAllConsoles,
};

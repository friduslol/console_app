const express = require("express");
const router = express.Router();

const gamesController = require("../controllers/gamesController");

router.get("/:gameId", gamesController.getGameById);
router.get("", gamesController.getAllGames);
router.post("", gamesController.createGame);

module.exports = router;

const express = require("express");
const router = express.Router();

const consolesController = require("../controllers/consolesController");

//router.get("", gamesController.getAllGames);
router.post("", consolesController.createConsole);
router.get("/:consoleId", consolesController.getConsoleById);
router.post("/addGameToConsole", consolesController.addGameToConsole);
router.get("", consolesController.getAllConsoles);

module.exports = router;

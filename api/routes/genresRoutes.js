const express = require("express");
const router = express.Router();

const genresController = require("../controllers/genresController");

router.post("/addGenreToGame", genresController.addGenreToGame);
router.post("", genresController.createGenre);

module.exports = router;

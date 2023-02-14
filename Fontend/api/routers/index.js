const express = require("express");
const rootRouter = express.Router();
const { jokeStoriesRouter } = require("./jokeStories-router");
rootRouter.use("/joke-story", jokeStoriesRouter);

module.exports = { rootRouter };

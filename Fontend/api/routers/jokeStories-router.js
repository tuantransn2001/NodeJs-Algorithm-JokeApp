const { JokeStories } = require("../models");
const express = require("express");
const jokeStoriesRouter = express.Router();
jokeStoriesRouter.get("/", async (req, res) => {
  const jokeStories = await JokeStories.findAll();
  res.status(200).send(jokeStories);
});

jokeStoriesRouter.put("/:id/:vote", async (req, res) => {
  const { id, vote } = req.params;
  await JokeStories.update(
    {
      vote,
    },
    {
      where: {
        id,
      },
    }
  );

  res.status(201).send("Update user vote success");
});

module.exports = { jokeStoriesRouter };

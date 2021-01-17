const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
      const reviews = await knex("review");
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });
router.post("/", async (request, response) => {
    try {
      const reviews = await knex("review")
      .insert(request.body);
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });
  
  router.get("/:id", async (request, response) => {
    try {
      const reviews = await knex("review")
      .where({id: parseInt(request.params.id)});
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });
  
  router.put("/:id", async (request, response) => {
    try {
      const reviews = await knex("review")
      .where({id: parseInt(request.params.id)})
      .update({
        title: "baked goods",
        description: "you'll feel the taste with the auroma around",
        meal_id: 6,
        stars: 4,
        created_date: "2020-11-09 22:00:00" });
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });
  router.delete("/:id", async (request, response) => {
    try {
      const reviews = await knex("review")
      .where({id: parseInt(request.params.id)})
      .del();
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });


module.exports = router;
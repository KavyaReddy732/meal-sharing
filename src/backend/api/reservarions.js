const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
      const reservations = await knex("reservation");
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });
router.post("/", async (request, response) => {
    try {
      const reservations = await knex("reservation")
      .insert({
        number_of_guests: 3,
        meal_id: 6,
        created_date: "2020-11-14 22:00:00",
        contact_phonenumber: "67453765",
        contact_name: "vinnu",
        contact_email: "vinnu92@gmail.com"
      });
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });
  
  router.get("/:id", async (request, response) => {
    try {
      const reservations = await knex("reservation")
      .where({id: parseInt(request.params.id)});
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });
  
  router.put("/:id", async (request, response) => {
    try {
      const reservations = await knex("reservation")
      .where({id: parseInt(request.params.id)})
      .update({
        number_of_guests: 6,
        meal_id: 4,
        created_date: "2020-11-14 20:00:00",
        contact_phonenumber: "67453765",
        contact_name: "vinnu",
        contact_email: "vinnu92@gmail.com" });
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });
  router.delete("/:id", async (request, response) => {
    try {
      const reservations = await knex("reservation")
      .where({id: parseInt(request.params.id)})
      .del();
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });
 
  
  module.exports = router;
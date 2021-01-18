const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("*");
    response.send(titles);
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  if(request.query.maxPrice){
    if(!isNaN(request.query.maxPrice)){
    try{
      const meals = await knex("meal").select('*')
      .where("price", "<", parseInt(request.query.maxPrice));
      response.json(meals);
    } catch (error) {
        throw error;
      }
    }
    else{
      response.send("please enter maxPrice");
    }
  }
  else if(request.query.availableReservations){
    if(request.query.availableReservations === true){
      try{
        const meals = await knex("meal")
        .innerJoin('resrvation',{'meal.id':'reservation.meal_id'})
        .groupBy('meal.id')
        .where("meal.max_reservation", ">", sum("reservation.number_of_guests"))
        .select('*');
        response.json(meals);
      } catch (error) {
          throw error;
        }
      }
      else{
        response.send("no reservations avaliable");
      }
  }
  else if(request.query.title){
    if(parseInt(request.query.title)){
    try{
      const meals = await knex("meal").select('*')
      .where("title", "like", parseInt(request.query.title));
      response.json(meals);
    } catch (error) {
        throw error;
      }
    }
    else{
      response.send("please enter title");
    }
  }
  else if(request.query.createdAfter){
    if(Date(request.query.createdAfter)){
    try{
      const meals = await knex("meal").select('*')
      .where("created_date", ">", parseInt(request.query.createdAfter));
      response.json(meals);
    } catch (error) {
        throw error;
      }
    }
    else{
      response.send("please enter valid date");
    }
  }
  else if(request.query.limit){
    if(!isNaN(request.query.limit)){
    try{
      const meals = await knex("meal")
      .limit(request.query.limit);
      response.json(meals);
    } catch (error) {
        throw error;
      }
    }
    else{
      response.send("please enter limited number");
    }
  }
  else{
    response.send(meals)
  }
});

router.post("/", async (request, response) => {
  try {
    const meals = await knex("meal").insert(request.body);
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const meals = await knex("meal").select('title')
    .where({id: parseInt(request.params.id)});
    response.send(meals);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const meals = await knex("meal")
    .where({id: parseInt(request.params.id)})
    .update({ title: "shushi",
    description: "enjoy the auroma of sushi",
    location: "carlsberg, copenhagen",
    when: "2020-12-08 19:10:00",
    max_reservations: 4,
    price: "60",
    created_date: "2020-10-08 22:00:00" });
    response.json(meals);
  } catch (error) {
    throw error;
  }
});
router.delete("/:id", async (request, response) => {
  try {
    const meals = await knex("meal")
    .where({id: parseInt(request.params.id)})
    .del();
    response.json(meals);
  } catch (error) {
    throw error;
  }
});


module.exports = router;

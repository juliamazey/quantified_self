var express = require("express");
var router = express.Router();
var Food = require('../../../models').Food;
var Meal = require('../../../models').Meal;
var MealFood = require('../../../models').MealFood;
pry = require('pryjs')

// GET all meals
router.get("/", function(req, res) {
  Meal.findAll({
    attributes: ['id', 'name'],
    include: { model: Food, attributes: ['id', 'name', 'calories'], through: {attributes: []}}
  })
  .then(meals => {
    if (meals.length > 0) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(meals));
    }
    else {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send(JSON.stringify({ message: 'No meals in database'}));
    }
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send({ error })
  });
});

// GET meal by id
router.get("/:id/foods", function(req, res) {
  Meal.findOne({
    where: {
      id: req.params.id,
    },
    include: { model: Food, attributes: ['id', 'name', 'calories'], through: { attributes: [] } },
    attributes: ['id', 'name']
  })
  .then(meal => {
    if (meal != null) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(meal);
    }
    else {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send(JSON.stringify({ message: 'Meal does not exist in database'}));
    }
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send({ error })
  });
});


// POST food to meal
router.post("/:meal_id/foods/:id", function(req, res) {
  MealFood.findOrCreate({
    where: {
      MealId: req.params.meal_id,
      FoodId: req.params.id
    },
    include: [ { model: Food, attributes: ['name'] }, { model: Meal, attributes: ['name'] } ]
  })
  .then(MealFood => {
    res.setHeader("Content-Type", "application/json");
    res.status(201).send(JSON.stringify({ message: `Successfully added ${MealFood[0].Food.name} to ${MealFood[0].Meal.name}`}));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({ message: 'Meal or food does not exist in database'}));
  });
});


// DELETE food from meal
router.delete("/:meal_id/foods/:id", function(req, res) {
  MealFood.destroy({
    where: {
      MealId: req.params.meal_id,
      FoodId: req.params.id
    },
  })
  .then(food => {
    if (food === 0) {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send(JSON.stringify({ message: 'Food does not exist in database'}));
    }
    else {
      res.setHeader("Content-Type", "application/json");
      res.status(204).send({ food });
    }
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send({ error })
  });
});

module.exports = router;

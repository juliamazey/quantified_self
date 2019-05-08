var express = require("express");
var router = express.Router();
var Food = require('../../../models').Food;
var MealFood = require('../../../models').MealFood;
var Meal = require('../../../models').Meal;
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

module.exports = router;

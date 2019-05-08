var express = require("express");
var router = express.Router();
var Food = require('../../../models').Food;
var Meal = require('../../../models').Meal;
pry = require('pryjs')

// GET meal by id
router.get("/:id", function(req, res) {
  Meal.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(meal => {
    if (meal != null) {
      meal.getFood()
      .then(foods => {
        var mealFacade = {
          id: meal.id,
          name: meal.name,
          foods: []
        }
        foods.forEach(function(element) {
        var foodFacade = {
            id: element.id,
            name: element.name,
            calories: element.calories
          }
          mealFacade.foods.push(foodFacade)
        })
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(mealFacade);
      })
      .catch(error => {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send({ error })
      })
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

module.exports = router;

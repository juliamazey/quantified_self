var express = require("express");
var router = express.Router();
var Food = require('../../../models').Food;
var Meal = require('../../../models').Meal;
var MealFacade = require('../../../facades/meal_facade');
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
      var mealFacade = new MealFacade(meal)
      mealFacade.listFoods()
      // res.setHeader("Content-Type", "application/json");
      // res.status(200).send(meal);
    }
    else {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send(JSON.stringify({ message: 'Food does not exist in database'}));
    }
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send({ error })
  });
});

module.exports = router;

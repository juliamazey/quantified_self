var express = require("express");
var router = express.Router();
var Food = require('../../../models').Food;
var Meal = require('../../../models').Meal;
pry = require('pryjs')

// GET meal by id
router.get("/:id", function(req, res) {
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

module.exports = router;

var express = require("express");
var router = express.Router();
var Food = require('../../../models').Food;
var Meal = require('../../../models').Meal;
pry = require('pryjs')

// GET meal by id
router.get("/:id", function(req, res) {
  Food.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'name', 'calories']
  })
  .then(food => {
    if (food != null) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(food));
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

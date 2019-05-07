var express = require("express");
var router = express.Router();
var Food = require('../../../models').Food;
pry = require('pryjs')

/* GET all foods */
router.get("/", function(req, res) {
  Food.findAll()
    .then(foods => {
      if (foods.length > 0) {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(foods));
      }
      else {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: 'No food in database'}));
      }
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send({error})
    });
});

module.exports = router;

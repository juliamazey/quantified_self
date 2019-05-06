var express = require("express");
var router = express.Router();
var Food = require('../../../models').Food;
pry = require('pryjs')

/* GET all foods */
router.get("/", function(req, res) {
  Food.findAll()
    .then(foods => {
      eval(pry.it)
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(foods));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send({error})
    });
});

module.exports = router;

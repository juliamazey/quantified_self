pry = require('pryjs')
var Food = require('../models').Food;
var MealFood = require('../models').MealFood;

class MealFacade {
  constructor(data) {
    this.data = data;
  }

  listFoods() {
    Food.findAll({
      include: [
        {
          model: MealFood,
          where: { 'MealId': this.data.id },
        }
      ],
      attributes: ['id', 'name', 'calories']
    })
    .then(foods => {
      var food_list = []
      for (i = 0; i < foods.length; i++) {
        var food_data = {
          id: foods[i].id,
          name: foods[i].name,
          calories: foods[i].calories,
        }
        food_list.push(food_data)
      }
      return food_list
    })
    .catch(error => {
    })
  }
}

module.exports = MealFacade;

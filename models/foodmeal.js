'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodMeal = sequelize.define('FoodMeal', {
    MealId: DataTypes.INTEGER,
    FoodId: DataTypes.INTEGER
  }, {});
  FoodMeal.associate = function(models) {
    // associations can be defined here
  };
  return FoodMeal;
};
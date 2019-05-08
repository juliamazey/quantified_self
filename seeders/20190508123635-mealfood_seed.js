'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('MealFoods', [{
          id: 1,
          MealId: 1,
          FoodId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        id: 2,
        MealId: 1,
        FoodId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        MealId: 1,
        FoodId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        MealId: 2,
        FoodId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        MealId: 2,
        FoodId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        MealId: 3,
        FoodId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        MealId: 3,
        FoodId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MealFoods', null, {});
  }
};

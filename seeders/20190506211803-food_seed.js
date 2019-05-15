'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Food', [{
          name: "Banana",
          calories: 150,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Apple",
          calories: 70,
      	  createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Kiwi",
          calories: 50,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Cucumber",
          calories: 60,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Chicken",
          calories: 300,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Yogurt",
          calories: 100,
          createdAt: new Date(),
          updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Food', null, {});
  }
};

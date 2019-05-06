'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Food', [{
          id: 1,
          name: "Banana",
          calories: 150,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: 2,
          name: "Apple",
          calories: 70,
      	  createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: 3,
          name: "Kiwi",
          calories: 50,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: 4,
          name: "Cucumber",
          calories: 60,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: 5,
          name: "Chicken",
          calories: 300,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: 6,
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

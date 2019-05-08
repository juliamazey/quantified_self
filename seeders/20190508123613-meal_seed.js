'use strict';

	module.exports = {
	  up: (queryInterface, Sequelize) => {

	    return queryInterface.bulkInsert('Meals', [{
	          id: 1,
	          name: "Fruit Salad",
	          createdAt: new Date(),
	          updatedAt: new Date()
	      },
	      {
	          id: 2,
	          name: "Lunch",
	      	  createdAt: new Date(),
	          updatedAt: new Date()
	      },
	      {
	          id: 3,
	          name: "Dinner",
	          createdAt: new Date(),
	          updatedAt: new Date()
	      }
	    ], {});
	  },

	  down: (queryInterface, Sequelize) => {
	    return queryInterface.bulkDelete('Meals', null, {});
	  }
	};

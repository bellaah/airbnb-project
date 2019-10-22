'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', 
      [
        { name:"heesun" }
      ] , {});
  },

  down: (queryInterface, Sequelize) => {
    
  }
};

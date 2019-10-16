'use strict';
const roomData = require("../data/roomData/js");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('rooms', roomData , {});
  },

  down: (queryInterface, Sequelize) => {
    
  }
};

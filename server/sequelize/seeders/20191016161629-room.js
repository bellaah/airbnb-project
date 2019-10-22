'use strict';
const roomData = require("../data/roomData.js");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const newRoomData = roomData.map((item) => {
        item.option = item.option.join(' ');
        item.info = item.info.join(' ');
        item.review = Math.floor(Math.random() * 100) + 1; 
        item.hostID = 1; 
        return item;
    });
  
    return queryInterface.bulkInsert('rooms', newRoomData , {});
  },

  down: (queryInterface, Sequelize) => {
    
  }
};

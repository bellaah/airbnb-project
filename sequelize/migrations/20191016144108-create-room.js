'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rooms', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        hostID: {
            type: Sequelize.STRING,
            allowNull: false
        },
        img: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        capacity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        star: {
            type: Sequelize.DOUBLE
        },
        review: {
            type: Sequelize.INTEGER
        },
        option: {
            type: Sequelize.STRING
        },
        info: {
            type: Sequelize.STRING
        }
      },
      {
          timestamps: false
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rooms');
  }
};
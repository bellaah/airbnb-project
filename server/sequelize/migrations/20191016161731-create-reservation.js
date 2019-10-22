'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservations', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        guestID: {
          type: Sequelize.STRING,
          allowNull: false
        },
        roomID: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        checkIn: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        checkOut: {
          type: DataTypes.DATEONLY,
          allowNull: false
        }
      },
      {
        timestamps: false
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reservations');
  }
};
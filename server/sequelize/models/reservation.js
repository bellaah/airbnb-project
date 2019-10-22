'use strict';
module.exports = (sequelize, DataTypes) => {
  const reservation = sequelize.define('reservation', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      guestID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      roomID: {
        type: DataTypes.INTEGER,
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

  reservation.associate = (models) => {
    reservation.belongsTo(models.user, {
        foreignKey: "guestID"
    });

    reservation.belongsTo(models.room, {
        foreignKey: "roomID"
    });
  };
  
  return reservation;
};
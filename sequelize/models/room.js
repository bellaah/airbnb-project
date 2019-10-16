'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define("room", {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        hostID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        star: {
            type: DataTypes.DOUBLE
        },
        review: {
            type: DataTypes.INTEGER
        },
        option: {
            type: DataTypes.STRING
        },
        info: {
            type: DataTypes.STRING
        }
      },
      {
          timestamps: false
      }
    );

  room.associate = (models) => {
    room.belongsTo(models.user, {
        foreignKey: "hostID"
    });
  };
  
  return room;
};
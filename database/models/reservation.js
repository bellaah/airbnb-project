module.exports = function(sequelize, dataTypes) {
    const reservation = sequelize.define("reservations", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        guestID: {
            type: dataTypes.STRING,
            allowNull: false
        },
        roomID: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        checkIn: {
            type: dataTypes.DATE,
            allowNull: false
        },
        checkOut: {
            type: dataTypes.DATE,
            allowNull: false
        }
    });
  
    reservation.associate = function(models) {
        reservation.belongsTo(models.user, {
            foreignKey: "guestID"
        });

        reservation.belongsTo(models.room, {
            foreignKey: "roomID"
        });
    };
    return reservation;
};
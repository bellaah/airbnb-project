const { reservation,Sequelize } = require("../models/index.js");
const Op = Sequelize.Op;

class Reservation {
    create(obj) {
        return reservation.create({
            roomID: obj.roomID,
            guestID: obj.guestID,
            checkIn: obj.checkIn,
            checkOut: obj.checkOut
        })
        .then()
        .catch(err => console.log(err));
    }
}

module.exports = Reservation;
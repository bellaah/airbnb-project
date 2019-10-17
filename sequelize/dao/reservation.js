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
            .then(res => true)
            .catch(err => {
                console.log(err);
                return false;
            });
    }

    delete(roomID,guestID) {
        return reservation.destroy({
                where: {
                    [Op.and]:{
                        roomID,
                        guestID
                    }
                }
            })
            .then(res => true)
            .catch(err => {
                console.log(err);
                return false;
            });
    }


}

module.exports = Reservation;
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

    async findReservedRoom(checkIn,checkOut) {
        const reservedIdList = await reservation.findAll({
            attributes: ['roomID'],
            where: {
                [Op.and]:{
                    checkIn:{  
                        [Op.lt] : new Date(checkOut)
                    },
                    checkOut: {
                        [Op.gt] : new Date(checkIn)
                    }
                }
            }
        })
        .map(data => data.get({ plain: true }))
        .catch(err => console.log(err));
        return  reservedIdList.map(item => item.roomID);
    }

}

module.exports = Reservation;
const { room,Sequelize }  = require("../models/index.js");
const Op = Sequelize.Op;

class Room {
    create(obj) {
        obj.option = obj.option.join(' ');
        obj.info = obj.info.join(' ');

        return room.create(obj)
            .then(res => true)
            .catch(err => {
                console.log(err);
                return false;
            });
    }

    findRoomsByPrice(lowestPrice,highestPrice) {
        return room.findAll({
            where: {
                price: {
                    [Op.and]: {
                        [Op.gte]: lowestPrice,
                        [Op.lte]: highestPrice
                      }
                }
            }
        }).map(data => data.get({ plain: true }))
        .catch(err => console.log(err));
    }

    findRoomsByCapacity(guest) {
        return room.findAll({
            where: {
                capacity: {
                    [Op.gte] : guest
                }
            }
        }).map(data => data.get({ plain: true }))
        .catch(err => console.log(err));
    }

    findRoomsByDate(checkIn,checkOut) {     //미완성
        const reservedRoom = room.findAll({
            attributes: ['roomID'],
            where: {
                [Op.and]:{
                    checkIn:{  
                        [Op.lte] : new Date(checkOut)
                    },
                    checkOut: {
                        [Op.gt] : new Date(checkIn)
                    }
                }
            }
        });
    }

}

module.exports = Room;
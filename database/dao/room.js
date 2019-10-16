const { room,Sequelize } = require("../index");
const Op = Sequelize.Op;

class Room {
    create(obj) {
        return room.create({
            title : obj.title,
            hostID : obj.hostID,
            star : obj.star,
            img : obj.img,
            price : obj.price,
            review : obj.review,
            capacity : obj.capacity
        })
        .then()
        .catch(err => console.log(err));
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
        })
        .map(data => data.get({ plain: true }))
        .then()
        .catch(err => console.log(err));
    }


}
// (async() => {
//     const a = new Room();
//     let data = await a.findRoomsByPrice(50000,70000);
//     console.log(data);

// })()

module.exports = Room;
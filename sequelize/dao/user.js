const { user,Sequelize } = require("../models/index.js");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const secretKey = process.env.TOKEN_SECRET_KEY;
class User {
    create(userData) {
        return user.create(userData)
            .then(res => true)
            .catch(err => {
                console.log(err);
                return false;
            });
    }

}

module.exports = User;
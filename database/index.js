const Sequelize = require('sequelize');
const fs        = require('fs');
const path      = require('path');
const dotenv    = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host : process.env.DB_HOST,
        dialect : 'mysql',
        pool: {
            max: 5,
            min: 0
        }
    }
);

const db = {};

fs.readdirSync(__dirname + "/models")
  .filter(file => {
    return file.indexOf(".") !== 0 && file !== "index.js";
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, "models", file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = { 
  Sequelize : Sequelize,
  sequelize : sequelize,
  user : db.user,
  room : db.room,
  reservation : db.reservation
 };
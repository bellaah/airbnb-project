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
            min: 0,
            idel: 10000
        }
    }
);

const db = {};

fs.readdirSync(__dirname + "/models")
  .filter(function(file) {
    return file.indexOf(".") !== 0 && file !== "index.js" && file != "dao";
  })
  .forEach(function(file) {
    const model = sequelize["import"](path.join(__dirname, "models", file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize   // 연결 테스트 
  .sync()
  .then(() => {
      console.log('Connection has been established successfully.');
  })
  .catch(err => {
      console.error('Unable to connect to the database:', err);
  });

db.sequelize = sequelize;

module.exports = db;
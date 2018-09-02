const Sequelize = require('sequelize');

const sequelizeDb = new Sequelize('demodb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  logging: (log)=>{console.log("Custom Log: " + log + "\nEnd -----");},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

export default sequelizeDb

const Sequelize = require('sequelize');
const connectionUrl = process.env.DATABASE_URL;
const sequelize = new Sequelize(connectionUrl);
console.log("Connection Url" + connectionUrl)
module.exports = sequelize;
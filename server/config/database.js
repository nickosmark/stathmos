const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_db', 'postgres', 'pass', {
    // c'mon postgres, pls work!
    host: 'postgres',
    port: '5432',
    dialect: 'postgres'
  });

module.exports = sequelize;
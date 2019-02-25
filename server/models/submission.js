const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Submission = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    score:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Submission;
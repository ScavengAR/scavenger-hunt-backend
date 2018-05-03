const Sequelize = require('sequelize');
const db = require('../db');

const Result = db.define('result', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Result;

const Sequelize = require('sequelize');
const db = require('../db');

const Ranking = db.define('ranking', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Ranking;

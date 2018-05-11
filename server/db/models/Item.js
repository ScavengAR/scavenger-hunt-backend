const Sequelize = require('sequelize');
const db = require('../db');

const Item = db.define('item', {
  z: { //z position - depth
    type: Sequelize.INTEGER,
    allowNull: false
  },
  x: { //x position - left and right
    type: Sequelize.INTEGER,
    allowNull: false
  },
  y: { //y position - up and down
    type: Sequelize.INTEGER,
    allowNull: false
  },
  speed: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  captured: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

module.exports = Item;

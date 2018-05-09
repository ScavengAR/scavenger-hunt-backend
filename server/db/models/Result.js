const Sequelize = require('sequelize');
const db = require('../db');

const Result = db.define('result', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  time: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get() {
      let seconds = this.getDataValue('time') % 60;
      const minutes = (this.getDataValue('time') - seconds) / 60;
      seconds = seconds < 10 ? '0' + seconds : seconds; // displays seconds as two digits
      return `${minutes}:${seconds}`;
    }
  }
});

module.exports = Result;

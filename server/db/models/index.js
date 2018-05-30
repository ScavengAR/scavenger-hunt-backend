const User = require('./User')
const Result = require('./Result');
const CustomMap = require('./CustomMap');

/*
 * Associations
 */

User.hasMany(Result);
Result.belongsTo(User, {as: 'user'});

// Allows users to access the custom maps they create
User.hasMany(CustomMap);
CustomMap.belongsTo(User);

// Ensures that a unique leaderboard will be maintained for each custom map
CustomMap.hasMany(Result);
Result.belongsTo(CustomMap);

module.exports = {
  User,
  Result,
  CustomMap,
};

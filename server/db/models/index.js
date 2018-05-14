const User = require('./User')
const Result = require('./Result');
const CustomMap = require('./CustomMap');

//Associations
User.hasMany(Result);
Result.belongsTo(User, {as: 'user'});

User.hasMany(CustomMap);
CustomMap.belongsTo(User);

module.exports = {
  User,
  Result,
  CustomMap,
};

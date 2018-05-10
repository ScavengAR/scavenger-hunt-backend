const User = require('./User')
const Result = require('./Result');
const CustomMap = require('./CustomMap');
const Item = require('./Item');
const MapItem = require('./MapItem');

//Associations
CustomMap.belongsToMany(Item, { through: MapItem});
Item.belongsToMany(CustomMap, { through: MapItem});

User.hasMany(Result);
Result.belongsTo(User, {as: 'user'});

User.hasMany(CustomMap);
CustomMap.belongsTo(User, {as: 'creator'});

module.exports = {
  User,
  Result,
  CustomMap,
  Item,
  MapItem
};

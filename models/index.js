const User = require('./user');
const Tenant = require('./tenant');

User.hasMany(Tenant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Tenant.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Tenant };
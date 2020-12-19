const User = require('./User');
const Tenant = require('./Tenant');

User.hasMany(Tenant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Tenant.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Tenant };